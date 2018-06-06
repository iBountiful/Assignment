import {item} from "./item.class"

export class recipe {
  //instance variables
  ingredients : Array<item>;
  instructions : Array<string>;
  time : number;
  //default contructor
  constructor(p1: Array<item>, p2: Array<string>, p3: number){
    this.ingredients = p1;
    this.instructions = p2;
    this.time = p3;
  }

  addItem(aitem : item){
    this.ingredients.push(aitem);
  }

  addIns(instr : string){
    this.instructions.push(instr);
  }

}
