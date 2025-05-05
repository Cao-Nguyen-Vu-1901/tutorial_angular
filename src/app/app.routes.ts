// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ContactComponent } from './pages/contact/contact.component';
import { UserListComponent } from './pages/user-list/user-list.component';

// Thêm export để routes có thể được import từ các file khác
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'user-list', component: UserListComponent },
  { path: '**', redirectTo: '' }
];