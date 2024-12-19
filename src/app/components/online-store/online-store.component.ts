import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-online-store',
  templateUrl: './online-store.component.html',
  styleUrls: ['./online-store.component.css']
})
export class OnlineStoreComponent implements OnInit {

  products!: Product[];
  filteredProducts!: Product[];

  selectedGenre: string = '';
  selectedEquipmentType: string = '';
  sortCriteria: string = 'relevance';

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.applyFiltersAndSort();
  }

  applyFiltersAndSort() {
    this.filteredProducts = this.productService.filterProducts(this.selectedGenre, this.selectedEquipmentType);
    this.filteredProducts = this.productService.sortProducts(this.filteredProducts, this.sortCriteria);
  }

  onGenreChange(event: any) {
    this.selectedGenre = event.target.value;
    this.applyFiltersAndSort();
  }

  onEquipmentTypeChange(event: any) {
    this.selectedEquipmentType = event.target.value;
    this.applyFiltersAndSort();
  }

  onSortChange(event: any) {
    this.sortCriteria = event.target.value;
    this.applyFiltersAndSort();
  }

}
