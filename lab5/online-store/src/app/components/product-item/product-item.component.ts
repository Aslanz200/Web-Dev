import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  product = input.required<Product>();
  delete = output<number>();

  selectedImage: string = '';
  showGallery = false;
  liked = false;

  ngOnInit(): void {
    this.selectedImage = this.product().image;
  }

  selectImage(img: string): void {
    this.selectedImage = img;
  }

  toggleGallery(): void {
    this.showGallery = !this.showGallery;
  }

  onLike(): void {
    this.product().likes++;
    this.liked = true;
  }

  onDelete(): void {
    if (confirm('Are you sure you want to delete this product?')) {
      this.delete.emit(this.product().id);
    }
  }

  getStars(rating: number): string[] {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) stars.push('full');
      else if (rating >= i - 0.5) stars.push('half');
      else stars.push('empty');
    }
    return stars;
  }

  shareOnWhatsApp(): void {
    const text = encodeURIComponent(`Check out this product: ${this.product().link}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  }

  shareOnTelegram(): void {
    const url = encodeURIComponent(this.product().link);
    const text = encodeURIComponent(this.product().name);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  }

  formatPrice(price: number): string {
    return price.toLocaleString('ru-KZ') + ' ₸';
  }
}
