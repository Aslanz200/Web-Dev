import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product!: Product;

  selectedImage: string = '';
  showGallery: boolean = false;

  ngOnInit(): void {
    this.selectedImage = this.product.image;
  }

  selectImage(img: string): void {
    this.selectedImage = img;
  }

  toggleGallery(): void {
    this.showGallery = !this.showGallery;
  }

  getStars(rating: number): string[] {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push('full');
      } else if (rating >= i - 0.5) {
        stars.push('half');
      } else {
        stars.push('empty');
      }
    }
    return stars;
  }

  shareOnWhatsApp(): void {
    const text = encodeURIComponent(`Check out this product: ${this.product.link}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  }

  shareOnTelegram(): void {
    const url = encodeURIComponent(this.product.link);
    const text = encodeURIComponent(this.product.name);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  }

  formatPrice(price: number): string {
    return price.toLocaleString('ru-KZ') + ' ₸';
  }
}
