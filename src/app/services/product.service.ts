import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Gorra oficial Leones del Valle', price: 7, category: 'Accesorios', imageUrl: 'assets/store/gorra.jpg', sizeOptions: ['XS', 'S', 'M', 'L', 'XL'], description: 'Gorra oficial temprada 2024-2025', genre:'A',equipmentType:'PRIMERA', relevance:1},
    { id: 2, name: 'Camiseta Primera Equipación', price: 15, category: 'Camisetas', imageUrl: 'assets/store/camisetas-padres.jpg', sizeOptions: ['XS', 'S', 'M', 'L', 'XL'], description: 'Camiseta para papitos 2024-2025', genre:'A',equipmentType:'PRIMERA', relevance:2},
    
  ];
  getProducts(): Product[] {
    return this.products;
  }

  filterProducts(genre?: string, equipmentType?: string): Product[] {
    return this.products.filter(product =>
      (genre ? product.genre === genre : true) &&
      (equipmentType ? product.equipmentType === equipmentType : true)
    );
  }

  sortProducts(products: Product[], criteria: string): Product[] {
    if (criteria === 'relevance') {
      return products.sort((a, b) => (b.relevance ?? 0) - (a.relevance ?? 0));
    } else if (criteria === 'sales') {
      return products.sort((a, b) => (b.sales ?? 0) - (a.sales ?? 0));
    } else if (criteria === 'alphabetical') {
      return products.sort((a, b) => a.name.localeCompare(b.name));
    } else if (criteria === 'priceLowHigh') {
      return products.sort((a, b) => a.price - b.price);
    } else if (criteria === 'priceHighLow') {
      return products.sort((a, b) => b.price - a.price);
    } else if (criteria === 'dateAdded') {
      return products.sort((a, b) => (b.dateAdded?.getTime() ?? 0) - (a.dateAdded?.getTime() ?? 0));
    }
    return products;
  }
}
