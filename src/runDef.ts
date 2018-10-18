import { Variables } from './interfaces/Variables';
import { CodeDef } from './interfaces/CodeDef';
import { Var } from './classes/Var';
import { runTasks } from './runTasks';
import { runJs } from './runJs';

export function runDef(def: CodeDef, variables?: Variables, output?: Var) {
  if (def.matchedTasks) {
    runTasks(def.matchedTasks, variables, output);
  } else if (def.js) {
    runJs(def.js, variables, output);
  }
}
