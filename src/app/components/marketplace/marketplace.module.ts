import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { ProductsComponent } from './products/products.component';
import { MarketplaceRoutingModule } from './marketplace.routing';

@NgModule({
  declarations: [MarketplaceComponent, ProductsComponent],
  imports: [CommonModule, MarketplaceRoutingModule],
})
export class MarketplaceModule {}
