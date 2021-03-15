import { Component, OnInit } from '@angular/core';
import { BACService } from '../../services/bac.service';

@Component({
  selector: 'app-custom-drnk',
  templateUrl: './custom-drnk.component.html',
  styleUrls: ['./custom-drnk.component.css']
})
export class CustomDrnkComponent implements OnInit {
  name:string = "none";
  percent:number=0;
  size:number=0;
  constructor(private BACS:BACService) { }

  ngOnInit(): void {
  }

  setDrink(e){
    this.name = e.target.value;
  }
  setPercent(e){
    this.percent = e.target.value;
  }
  setSize(e){
    this.size = e.target.value;
  }

  setCustom(){
    let grams = this.size * 28.35;
    let gramsBooze = grams*this.percent/100;
    this.BACS.addBooze(gramsBooze);
    console.log(gramsBooze);
    this.BACS.checkData();
  }


}
