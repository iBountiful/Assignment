import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
//import { FridgeComponent } from './fridge/fridge.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ItemComponent } from './item/item.component';
import { FridgeComponent } from './fridge/fridge.component';


@NgModule({
  declarations: [
    AppComponent,
  //  FridgeComponent,
    RecipeComponent,
    ItemComponent,
    FridgeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
