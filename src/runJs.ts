import { Var } from './classes/Var';
import { Variables } from './interfaces/Variables';

export function runJs(str: string, variables?: Variables, output?: Var) {
  const letNames: Array<string> = ['output'],
    letValues: Array<Var> = [output];
  
  if (variables) {
    for (let letName in variables) {
      if (variables.hasOwnProperty(letName)) {
        letNames.push(letName);
        letValues.push(variables[letName]);
      }
    }
  }
  
  try {
    (new Function(...letNames, str))(...letValues);
  } catch (e) {
    const varsStr = Object.keys(variables).map((varName) => varName + '=' + variables[varName]).join(', ');
    
    throw new Error('Error running: ' + str + ' with variables: ' + varsStr);
  }
}
