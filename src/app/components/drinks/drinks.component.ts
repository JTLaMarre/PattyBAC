import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent implements OnInit {
  Drink:string="Beer";
  constructor() { }

  ngOnInit(): void {
  }

  setDrink(e){
    this.Drink = e.target.value;
  }
}
