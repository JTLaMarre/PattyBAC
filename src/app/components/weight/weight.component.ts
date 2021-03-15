import { Output, SimpleChanges } from '@angular/core';
import { Component, Input, OnChanges } from '@angular/core';
import { BACService } from '../../services/bac.service';

@Component({
  selector: 'app-weight',
  templateUrl: './weight.component.html',
  styleUrls: ['./weight.component.css']
})
export class WeightComponent implements OnChanges {
  @Input() WeightInput:any;

  weight:number=0;


 constructor( private BASCS:BACService) { }


 ngOnChanges(changes: SimpleChanges): void{

    console.log(JSON.stringify(changes))
    this.WeightInput = this.weight

  }

  setWeight(e:any){
    this.weight = e.target.value;
    this.WeightInput=this.weight;
    console.log(this.weight);
    this.BASCS.addWeight(this.weight);
    this.BASCS.checkData();
  }

}
