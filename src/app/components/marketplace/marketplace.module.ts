import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { MarketplaceRoutingModule } from './marketplace.routing';
import { ProductPopupComponent } from './product-popup/product-popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [MarketplaceComponent, ProductPopupComponent],
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
