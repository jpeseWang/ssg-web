import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { ProductsComponent } from './products/products.component';
import { MarketplaceRoutingModule } from './marketplace.routing';
import { ProductPopupComponent } from './product-popup/product-popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatTreeModule } from '@angular/material/tree';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
@NgModule({
  declarations: [
    MarketplaceComponent,
    ProductsComponent,
    ProductPopupComponent,
  ],
  imports: [
    CommonModule,
    MarketplaceRoutingModule,
    MatDialogModule,
    FormsModule,
    MatIconModule,
    MatMenuModule,
    MatBadgeModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
  ],
})
export class MarketplaceModule {}
