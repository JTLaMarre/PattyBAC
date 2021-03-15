import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeightComponent } from './components/weight/weight.component';
import { SexComponent } from './components/sex/sex.component';
import { DrinksComponent } from './components/drinks/drinks.component';
import { CustomDrnkComponent } from './components/custom-drnk/custom-drnk.component';
import { CalcComponent } from './components/calc/calc.component';

@NgModule({
  declarations: [
    AppComponent,
    WeightComponent,
    SexComponent,
    DrinksComponent,
    CustomDrnkComponent,
    CalcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
