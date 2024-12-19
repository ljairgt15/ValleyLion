import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Camiseta Authentic Niño Primera Equipación Blanca 24/25', price: 150, category: 'Camisetas', imageUrl: 'assets/logo.png', sizeOptions: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'], description: 'Camiseta oficial del equipo.', genre:'CH',equipmentType:'PRIMERA', relevance:1},
    { id: 2, name: 'Camiseta Femenina Primera Equipación Blanca 24/25', price: 100, category: 'Camisetas', imageUrl: 'assets/logo.png', sizeOptions: ['XS', 'S', 'M', 'L', 'XL'], description: 'Camiseta para aficionados.', genre:'F',equipmentType:'PRIMERA', relevance:2},
    // Más productos...
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
