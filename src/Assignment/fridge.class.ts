import {item} from "./item.class"
import {recipe} from "./recipe.class"

export class fridge {
  //instance variables
  contents :  Array<item>;

  constructor(p1 : Array<item>){
    this.contents = p1;
  }

  add(aItem : item){
    //increase the quantity if it exist
    for (let f of this.contents){
      if(aItem.name === f.name){
        f.quantity +=1;
      }
    }
    //if there is no item in the fridge add it
    for (let f of this.contents){
      if(aItem.name != f.name){
        this.contents.push(aItem);
      }
    }

  }
  remove(i : item, amt : number){
    for(let x of this.contents){
      //remove the amount specified
      if (x.name === i.name && x.quantity > amt){
        x.quantity -= amt;
      }
      //to remove completely from fridge
      else if (x.name === i.name && x.quantity < amt){
        this.contents.splice(x.name.indexOf(i.name),1);
      }
    }
  }

  checkRecipe(r : recipe) : item[][] {
    //confirm items
    let itemsHave : Array<item>;
    //Items in need
    let shoppingList : Array<item>;
    //recipe ingredients
    for (let x of r.ingredients){
    //fridge ingredients
      for (let y of this.contents){
      //
        if (x.name === y.name){
          itemsHave.push(x);
        }
        else
          shoppingList.push(x);
      }
    }
    return [itemsHave, shoppingList];
  }

}
