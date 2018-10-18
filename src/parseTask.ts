import { ParsedTask } from './interfaces/ParsedTask';
import { MatchPartial } from './interfaces/MatchPartial';

export function parseTask(task: string, matchPartials: Array<MatchPartial>): ParsedTask {
  const taskWords = task.split(/\s+/),
    vars: Record<string, string> = {};
  
  let match: MatchPartial;
  
  matchPartials.some((matchPartial) => {
    if (matchPartial.words.length !== taskWords.length) {
      return false;
    }
    
    if (matchPartial.words.every((partial, i) => {
      if (partial.indexOf('{') >= 0) {
        vars[partial.substring(1, partial.length-1)] = taskWords[i];
        return true;
      }
      
      return taskWords[i] === partial;
    })) {
      match = matchPartial;
      return true;
    }
  });
  
  return { match: match, vars: vars };
}
