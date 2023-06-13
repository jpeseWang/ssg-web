import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductI } from 'src/app/interfaces';
import { NumberService } from 'src/app/services';

@Component({
  selector: 'app-product-popup',
  templateUrl: './product-popup.component.html',
  styleUrls: ['./product-popup.component.css'],
})
export class ProductPopupComponent implements OnInit {
  quantity = 0;
  product!: ProductI;

  constructor(
    public dialogRef: MatDialogRef<ProductPopupComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    private numberService: NumberService
  ) {
    this.product = data.product;
  }
  ngOnInit(): void {}

  getNumberWithCommas(num: number) {
    return this.numberService.getNumberWithCommas(num);
  }

  add() {
    this.quantity++;
  }

  reduce() {
    if (this.quantity !== 0) {
      this.quantity--;
    }
  }

  addToCart() {
    if (this.quantity !== 0) {
      this.dialogRef.close({
        event: 'AddToCart',
        data: { product: this.product, quantity: this.quantity },
      });
    } else {
      this.dialogRef.close();
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
