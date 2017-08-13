import { Component } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './products.service';
import { appService } from './app.service';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'my-app',
  templateUrl: `app/app.component.html`,
  providers: [ProductService]
})

/*export class AppComponent  { 
  appTitle = 'Angular2 Demo';
  appStatus = true;
  appList = [{
      "id": 'icon_boy',
      "url": 'app/images/boy.png'
    }, {
      "id": 'icon_girl',
      "url": 'app/images/girl.png'
    }];
}*/

export class AppComponent {
   iproducts: IProduct[];
   constructor(private _product: ProductService) {
   }
   
   ngOnInit() : void {
      this._product.getproducts()
      .subscribe(iproducts => this.iproducts = iproducts);
   }
}