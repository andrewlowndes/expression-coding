import { ParsedCode } from './interfaces/ParsedCode';
import { CodeDef } from './interfaces/CodeDef';

export function parseCode(str: string): ParsedCode {
  const result: ParsedCode = { defs: [], main: {} };
  
  let def: CodeDef = result.main,
    mode: string = 'main';
  
  str.split("\n").forEach((line) => {
    line = line.trim();
    
    if (!line.length) {
      return;
    }
    
    const keywordCharIndex = line.indexOf(':');
    
    if (keywordCharIndex >= 0) {
      mode = line.substring(0, keywordCharIndex);
      
      switch (mode) {
        case 'defineJS':
        case 'define': {
          if (!('match' in def) || 'js' in def || 'tasks' in def) {
            def = {};
            result.defs.push(def);
          }
          
          const defineMatch = line.substring(keywordCharIndex+1).trim();
          def.match = def.match || [];
          def.match.push(defineMatch);
          break;
        }
        case 'main': {
          def = result.main;
          break;
        }
      }
    } else if (mode) {
      switch (mode) {
        case 'defineJS': {
          def.js = def.js || '' + line;
          break;
        }
        case 'main':
        case 'define': {
          def.tasks = def.tasks || [];
          def.tasks.push(line);
          break;
        }
      }
    }
  });
  
  return result;
}
