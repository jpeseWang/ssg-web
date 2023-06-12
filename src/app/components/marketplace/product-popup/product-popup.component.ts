import { Component, OnInit, Inject } from '@angular/core';
import { ProductService } from 'src/app/services';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-product-popup',
  templateUrl: './product-popup.component.html',
  styleUrls: ['./product-popup.component.css'],
})
export class ProductPopupComponent implements OnInit {
  products: any[] = [];
  constructor(@Inject(MAT_DIALOG_DATA) public product: any) {}
  ngOnInit(): void {}

  numberWithCommas(x: string) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x)) x = x.replace(pattern, '$1,$2');
    return x;
  }

  addtoCart(product: any) {
    if (product.quantity) {
      // if quantity already exists on food object
      product.quantity++;
    } else {
      product.quantity = 1; //if quantity does not exist on food object, add it
    }
    console.log(product);
  }

  removeCart(product: any) {
    if (product.quantity) {
      product.quantity--;
    }
  }
}