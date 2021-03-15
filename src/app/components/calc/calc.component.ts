import { Component, OnInit } from '@angular/core';
import { BACService } from '../../services/bac.service';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {
  BAC:any=0;

  constructor(private BACS:BACService) { }

  ngOnInit(): void {
  }
  getBAC(){
    this.BACS.calcBAC();
    this.BAC=this.BACS.calcBAC();
  }

}
