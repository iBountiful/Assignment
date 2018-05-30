import { Component, OnInit, Input } from '@angular/core';
import { item } from '../item.class';
import { recipe } from '../recipe.class';
@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  //item
  milk = new item("milk", 1);
  honey = new item("honey", 2);
  strawberry = new item("strawberry", 7);
  taro = new item("taro",1);
  mango = new item("mango",1);
  //List of items
  list: Array<item> = [this.milk, this.honey, this.strawberry];
  list2: Array<item> = [this.milk, this.honey, this.mango];
  list3: Array<item> = [this.milk, this.honey, this.taro];
  //Recipe instructions
  rlist1: Array<string> = ["First milk", "Second honey", "Third strawberry"];
  rlist2: Array<string> = ["First milk", "Second honey", "Third mango"];
  rlist3: Array<string> = ["First milk", "Second honey", "Third taro"];
  //Time of recipe
  t : number = 5;
  //Recipes
   r1 = new recipe(this.list,this.rlist1,this.t);
   r2 = new recipe(this.list2,this.rlist2,this.t);
   r3 = new recipe(this.list3,this.rlist3,this.t);
  //Ex 1 instance variable Array
  example : Array<recipe> = [this.r1,this.r2,this.r3];
  example2 : Array<recipe> = [this.r1,this.r2,this.r3];
  Array1 : Array<item>;
  Array2 : Array<string>;
  atime : number;
  //formBinding : recipe = new recipe(this.Array1,this.Array2,this.atime);
  formBinding: item = new item("",0);
  //Example 2 stuff
  people : Array<InternalData>;

  selectedItem : recipe = null; //null instead of undefined
                                      //because undefined in JS causes properties
  editItem = null;                                    //to dissapear
  aArray : Array<recipe>;
  constructor() { }

  ngOnInit() {
  }

  addRecipe(){
  // this.Array1.push(new item (this.formBinding.ing,1));
//   this.Array2.push(this.formBinding.instructions);
  // this.atime = this.formBinding.t
   this.people.push(new InternalData(new recipe(this.Array1,this.Array2,this.atime)));
  }

  //Selecting an item
  select(aItem){
    this.selectedItem = aItem;
    this.aArray.push(aItem);
  }
  //
  edit(i){
    this.editItem = i;
  }
  change(x){
    for(let i = 0; i<this.example2.length; i++)  {
      for(let y of this.example2[i].ingredients){
        //  if(this.edit(x))
          y.name = this.formBinding.name;
      }
    }
  }
}

class InternalData {
  constructor(public r : recipe){}
}
