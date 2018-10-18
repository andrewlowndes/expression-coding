import { CodeDef } from './CodeDef';

export interface MatchPartial {
  match: string;
  def: CodeDef;
  words: Array<string>;
}
