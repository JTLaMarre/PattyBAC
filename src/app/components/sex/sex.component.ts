import { Component, OnInit } from '@angular/core';
import { BACService } from '../../services/bac.service';

@Component({
  selector: 'app-sex',
  templateUrl: './sex.component.html',
  styleUrls: ['./sex.component.css']
})
export class SexComponent implements OnInit {

  Sex:string="Male";


  constructor(private BACS:BACService) { }

  ngOnInit(): void {
  }

  setSex(e){
    this.Sex=e.target.value;
    console.log(this.Sex);
    this.BACS.addSex(this.Sex);
    this.BACS.checkData();
  }

}
