import {fridge} from "./fridge.class";
import {item} from "./item.class"
import {recipe} from "./recipe.class"
describe("Placeholder Suite", function () {
  //const size =5;
  let m = new item("milk", 1);
  let h = new item("honey", 2);
  let s = new item("strawberry", 7);
  let list1: Array<item> = [m, h, s];
  let f = new fridge(list1);
  let ice = new item("ice", 4)
  beforeEach(function () {

  });
  it("add test", function() {
    f.add(ice);
    expect(f.contents[3]).toBe(ice);

  });
  it("remove test", function() {
    f.remove(ice, 4);
    expect(f.contents[2]).toBe(s);
  });
  it("check recipe test", function() {
    let ingre : Array<item> = [m, h, s, ice];
    let instruc: Array<string> = ["First milk", "Second honey", "Third strawberry"];
    let r1 = new recipe(ingre, instruc,5);
    f.checkRecipe(r1);
    expect(f.checkRecipe(r1)).toBe([[m, h, s], [ice]]);
  });
});

  });
});
