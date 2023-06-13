import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../../../services';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ProductPopupComponent } from '../product-popup/product-popup.component';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.scss'],
})
export class MarketplaceComponent implements OnInit {
  products: any[] = [];
  itemsQuantity = 0;

  constructor(
    private readonly productService: ProductService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((res) => {
      this.products = [...res.data];
    });
  }

  openDialog(product: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = product;

    const dialogRef = this.dialog.open(ProductPopupComponent, dialogConfig);

    // dialogRef.afterClosed().subscribe((result) => {
    //   if (result && result.quantity > 0) {
    //     const existingCartItem = this.cartItems.find(
    //       (item) => item.id === result.id
    //     );
    //     if (existingCartItem) {
    //       existingCartItem.quantity += result.quantity;
    //     } else {
    //       this.cartItems.push(result);
    //     }
    //   }
    // });
  }

  numberWithCommas(x: string) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x)) x = x.replace(pattern, '$1,$2');
    return x;
  }

  // getTotalPrice(): number {
  //   let total = 0;
  //   for (const item of this.cartItems) {
  //     total += item.price * item.quantity;
  //   }
  //   return total;
  // }

  // removeItem(item: any): void {
  //   const index = this.cartItems.indexOf(item);
  //   if (index > -1) {
  //     this.cartItems.splice(index, 1);
  //   }
  // }
}
