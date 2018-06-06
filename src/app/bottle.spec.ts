
import {Bottle} from "./bottle.class";

describe("Placeholder Suite", function () {
  let b =0;
  const size =5;
  let bot = new Bottle(size, b);
  beforeEach(function () {

  });
  it("single bottle fill test", function() {


    bot.fill();
    expect(bot.btWater).toBe(5);

  });
  it("emtpy bottle test", function() {
    bot.empty();
    expect(bot.btWater).toBe(0);
  });
  it("test pouring", function() {
    let bot1 = new Bottle(5, b);
    let bot2 = new Bottle(3, b);
    bot1.fill();
    bot1.pour(bot2);

    expect(bot1.btWater).toBe(2);
    expect(bot2.btWater).toBe(3);
  });
});
