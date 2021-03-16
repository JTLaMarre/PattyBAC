import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BACService {
  Sex:string="Male";
  Weight:number;
  // placeholder 14 grams since standard drink at a bar in US is 14g Booze
  AlcoholInG:number=14;



  addSex(string:string){
    this.Sex=string;
  }
  addWeight(num:number){
    this.Weight=num;
  }
  addBooze(abvG:number){
    this.AlcoholInG=abvG;
  }
  calcBAC(){
    let WeightGs = this.Weight*453.6;
    if(this.Sex="Male"){
      // BAC = [Alcohol consumed in grams / (Body weight in grams x R)] X 100
      console.log("BAC:"+(this.AlcoholInG/WeightGs)*100)
      let num = (this.AlcoholInG/WeightGs)*100;

      return num.toFixed(2);
    }
  }

  checkData(){
    console.log(`Sex:${this.Sex} Weight:${this.Weight} ABV:${this.AlcoholInG}`);
    console.log(this);
  }

  constructor() { }
}
