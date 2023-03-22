import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropDownDirective } from 'src/shared/drop-down.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';

import { RecipeService } from './recipes/recipe.service';
import { AuthComponent } from './auth/auth.component';
import { LoaderComponent } from './loader/loader.component';
import { DataStorageService } from 'src/shared/data-storage.service';
import { AlertComponent } from './alert/alert.component';
import { RecipeModule } from './recipes/recipe.module';
import { RecipesRoutingModule } from './recipes/recipes-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
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
    RecipesRoutingModule
  ],
  providers: [ShoppingListService ,RecipeService,DataStorageService], //providers array show services which will be injected in another service
  bootstrap: [AppComponent]
})
export class AppModule { }
