import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.scss'],
})
export class MarketplaceComponent implements OnInit {
  constructor(private readonly productService: ProductService) {}

  activeTab: string = 'shop'; // Set the initial active tab

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }
  products: any[] = [];

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((res) => {
      this.products = [...res.data];
    });
  }
}
