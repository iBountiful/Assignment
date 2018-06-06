export class Bottle {

    btWater : number;
    btSize : number;

    constructor( btSize : number, btWater : number) {
        this.btSize;
        this.btWater;
    }

    fill() {
        this.btWater = this.btSize;
    }

    empty() {
        let btWater = 0;
    }

    pour(theBottle : Bottle) {
        let total  = theBottle.btWater + this.btWater;

        if(total < theBottle.btSize) {
          theBottle.btWater = total;
          this.btWater = 0;
        } else { // =remainder of water
            theBottle.btWater = theBottle.btSize;
            this.btWater = total - theBottle.btWater;
        }
    }
}