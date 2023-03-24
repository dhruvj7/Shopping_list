import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { DropDownDirective } from 'src/shared/drop-down.directive';

import { AuthComponent } from './auth/auth.component';
import { LoaderComponent } from './loader/loader.component';
import { AlertComponent } from './alert/alert.component';

import { RecipeModule } from './recipes/recipe.module';
import { RecipesRoutingModule } from './recipes/recipes-routing.module';
import { ShoppingModule } from './shopping-list/shopping.module';
import { ShoppingRoutingModule } from './shopping-list/shopping-routing.module';

import { StoreModule } from '@ngrx/store';
import { shoppingListReducer } from './shopping-list/ngrx-store/shoppingListReducer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropDownDirective,
    AuthComponent,
    LoaderComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RecipeModule,
    RecipesRoutingModule,
    ShoppingRoutingModule,
    ShoppingModule,
    StoreModule.forRoot({shoppingList:shoppingListReducer})
  ],
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }
