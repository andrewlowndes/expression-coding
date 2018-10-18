export class Var {
  val: any;
  
  constructor(val?: any) {
    this.val = val;
  }
  
  get(): any {
    return this.val;
  }
  
  set(val: any) {
    this.val = val;
  }
}
