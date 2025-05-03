import { Component } from '@angular/core';
import { NgFor, NgIf, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  standalone: true,
  imports: [NgFor, NgIf, CurrencyPipe]
})
export class ProductsComponent {
  currentPage = 1;
  totalPages = 3;
  
  products = [
    {
      id: 1,
      name: 'Laptop Gaming Asus ROG',
      category: 'Điện tử',
      price: 25000000,
      originalPrice: 27000000,
      rating: 4.5,
      reviewCount: 120,
      image: 'https://via.placeholder.com/300x200?text=Laptop'
    },
    {
      id: 2,
      name: 'Điện thoại iPhone 15 Pro',
      category: 'Điện tử',
      price: 30000000,
      originalPrice: 32000000,
      rating: 5,
      reviewCount: 85,
      image: 'https://via.placeholder.com/300x200?text=iPhone'
    },
    {
      id: 3,
      name: 'Áo khoác nam cao cấp',
      category: 'Quần áo',
      price: 1200000,
      originalPrice: null,
      rating: 4,
      reviewCount: 42,
      image: 'https://via.placeholder.com/300x200?text=Coat'
    },
    {
      id: 4,
      name: 'Giày thể thao Nike Air',
      category: 'Giày dép',
      price: 2500000,
      originalPrice: 2800000,
      rating: 4.5,
      reviewCount: 67,
      image: 'https://via.placeholder.com/300x200?text=Nike'
    },
    {
      id: 5,
      name: 'Bàn làm việc gỗ tự nhiên',
      category: 'Nội thất',
      price: 3500000,
      originalPrice: 4000000,
      rating: 4,
      reviewCount: 28,
      image: 'https://via.placeholder.com/300x200?text=Desk'
    },
    {
      id: 6,
      name: 'Ghế gaming cao cấp',
      category: 'Nội thất',
      price: 4200000,
      originalPrice: 4500000,
      rating: 4.5,
      reviewCount: 36,
      image: 'https://via.placeholder.com/300x200?text=Chair'
    }
  ];
}