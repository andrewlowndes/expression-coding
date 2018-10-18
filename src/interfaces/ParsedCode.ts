import { CodeDef } from './CodeDef';

export interface ParsedCode {
  defs: Array<CodeDef>;
  main: CodeDef;
}
