import { Component, OnInit } from '@angular/core';
import { NumberService, ProductService } from '../../../services';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ProductPopupComponent } from '../product-popup/product-popup.component';
import { CartItemI, ProductI } from '../../../interfaces';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.scss'],
})
export class MarketplaceComponent implements OnInit {
  products: ProductI[] = [];
  cartItems: CartItemI[] = [];
  cartQuantities = 0;
  total = 0;

  constructor(
    private readonly productService: ProductService,
    private numberService: NumberService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((res) => {
      this.products = [...res.data];
    });
  }

  openDialog(product: ProductI) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = { product };

    const dialogRef = this.dialog.open(ProductPopupComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((res) => {
      if (res.event === 'AddToCart') {
        const { product, quantity } = res.data;

        this.addProductToCart(product, quantity);

        this.cartQuantities += quantity;
      }
    });
  }

  addProductToCart(product: ProductI, quantity: number) {
    const index = this.cartItems.findIndex((item) => item.id === product.id);

    index !== -1
      ? (this.cartItems[index].quantity += quantity)
      : this.cartItems.push({
          id: product.id,
          name: product.name,
          price: product.price,
          quantity,
        });

    this.total += product.price * quantity;
  }

  getNumberWithCommas(num: number) {
    return this.numberService.getNumberWithCommas(num);
  }
}
