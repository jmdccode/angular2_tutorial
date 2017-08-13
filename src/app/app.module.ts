import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { HttpModule } from '@angular/http';
import { AppProduct } from './product.component'
import { AppInventory } from './inventory.component'
import { PageNotFoundComponent } from  './notFound.component'
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
   { path: 'Product', component: AppProduct },
   { path: 'Inventory', component: AppInventory }, 
   { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports:      [ BrowserModule, HttpModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, AppProduct, AppInventory, PageNotFoundComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}
