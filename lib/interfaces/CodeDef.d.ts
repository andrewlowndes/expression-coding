import { MatchedTask } from './MatchedTask';
export interface CodeDef {
    match?: Array<string>;
    js?: string;
    tasks?: Array<string>;
    matchedTasks?: Array<MatchedTask>;
}
