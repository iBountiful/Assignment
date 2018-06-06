import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeComponent } from './recipe.component';

describe('RecipeComponent', () => {
  let component: RecipeComponent;
  let fixture: ComponentFixture<RecipeComponent>;

  let milk = new item("milk", 1);
  let honey = new item("honey", 2);
  let strawberry = new item("strawberry", 7);
  let taro = new item("taro",1);
  let mango = new item("mango",1);
  const s =5;
  let list: Array<item> = [milk, honey, strawberry];
  let list2: Array<string> = ["First milk", "Second honey", "Third strawberry"];
  let bot = new recipe(list, list2, s);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //My tests
  it("New Recipe test", function() {

    bot.addRecipe();
    expect(example[3]).toBe(bot);

  });
  it("Select Recipe test", function() {
    bot.select(honey);
    expect(selectedItem.name).toBe(honey);
  });
  it("Recipe Edition test", function() {
    let bot1 = new recipe(list, list2, s)
    let bot2 = new recipe(list, list2, s)
    expect(bot1).toBe(2);
    expect(bot2).toBe(3);
  });

});
