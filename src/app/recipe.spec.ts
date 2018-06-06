import {item} from "./item.class";
import {recipe} from "./recipe.class";

describe("Placeholder Suite", function () {
  const time = 5;
  let milk = new item("milk", 1);
  let honey = new item("honey", 2);
  let strawberry = new item("strawberry", 7);
  let list: Array<item> = [milk, honey, strawberry];
  let list2: Array<string> = ["First milk", "Second honey", "Third strawberry"];
  let r = new recipe(list, list2, time);
  beforeEach(function () {

  });
  it("Add ingredient test", function() {
    let banana = new item("banana", 1);
    r.addItem(banana);
    expect(r.ingredients).toBe([milk, honey, strawberry, banana]);

  });
  it("Add instruction test", function() {
    r.addIns("Fourth banana");
    expect(r.instructions).toBe(["First milk", "Second honey", "Third strawberry", "Fourth banana"]);
  });

});
