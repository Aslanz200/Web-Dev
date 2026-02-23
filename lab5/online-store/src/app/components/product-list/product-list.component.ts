import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products = input.required<Product[]>();

  displayedProducts: Product[] = [];

  ngOnInit(): void {
    this.displayedProducts = [...this.products()];
  }

  ngOnChanges(): void {
    this.displayedProducts = [...this.products()];
  }

  onDelete(id: number): void {
    this.displayedProducts = this.displayedProducts.filter(p => p.id !== id);
  }
}
