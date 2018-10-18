import { CodeDef } from './interfaces/CodeDef';
import { MatchPartial } from './interfaces/MatchPartial';
import { Var } from './classes/Var';
import { parseCode } from "./parseCode";
import { parseTask } from './parseTask';
import { runDef } from './runDef';

function addDefsToLoader(loadedDef: Array<MatchPartial>, defs: Array<CodeDef>) {
  defs.forEach((def) => {
    def.match.forEach((match) => {
      loadedDef.push({
        match: match,
        def: def,
        words: match.split(/\s+/)
      });
    });
  });
}

function matchDefinitions(defs: Array<CodeDef>, loadedDef: Array<MatchPartial>) {
  defs.forEach((def) => {
    if (def.tasks) {
      def.matchedTasks = def.tasks.map((task) => ({
        task: task,
        match: parseTask(task, loadedDef)
      }));
    }
  });
}

export function runCode(str: string): string {
  const result = parseCode(str);
  
  const matchPartials: Array<MatchPartial> = [];

  //for use, only use the contents of the code to lookup the matches for each task
  addDefsToLoader(matchPartials, result.defs);
  
  matchDefinitions([result.main, ...result.defs], matchPartials);
  
  const output = new Var([]);

  try {
    runDef(result.main, {}, output);
  } catch (e) {
    output.set(['Error: ' + e.message]);
  }

  return output.get().join("\n");
}
