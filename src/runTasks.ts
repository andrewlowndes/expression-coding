import { MatchedTask } from './interfaces/MatchedTask';
import { Variables } from './interfaces/Variables';
import { Var } from './classes/Var';
import { runDef } from './runDef';

export function runTasks(tasks: Array<MatchedTask>, variables?: Variables, output?: Var) {
  let scopevars: Variables = { ...variables };
  
  tasks.forEach((task) => {
    const match = task.match;
    
    if (!match.match) {
      throw Error('Could not find matching statement for: ' + task.task);
    }
    
    let vars: Variables = {};

    for (let key in match.vars) {
      let letVal = match.vars[key];
      scopevars[letVal] = scopevars[letVal] || new Var(letVal);
      vars[key] = scopevars[letVal];
    }
    
    runDef(match.match.def, vars, output);
  });
}
