import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css'],
})
export class MarketplaceComponent implements OnInit {
  constructor(private readonly productService: ProductService) {}

  products: any[] = [];

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((res) => {
      this.products = [...res.data];
      console.log(this.products);
    });
  }
}
