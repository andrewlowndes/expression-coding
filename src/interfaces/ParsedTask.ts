import { MatchPartial } from './MatchPartial';

export interface ParsedTask {
  match: MatchPartial;
  vars: Record<string, string>;
}
