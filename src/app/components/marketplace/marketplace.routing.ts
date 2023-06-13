import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MarketplaceComponent } from './marketplace/marketplace.component';

const routes: Route[] = [
  {
    path: '',
    component: MarketplaceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarketplaceRoutingModule {}
