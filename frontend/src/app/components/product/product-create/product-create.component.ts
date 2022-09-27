import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from './../../category/category.model';
import { CategoryService } from './../../category/category.service';
import { Product } from './../product.model';
import { ProductService } from './../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    description: '',
    price: 0,
    category: 0
  }

  categories: Category[] = []


  constructor(private productService: ProductService,
    private categoryService: CategoryService,
    private router: Router) { 
    }

  ngOnInit(): void {
    this.categoryService.read().subscribe(categories => {
      this.categories = categories
    })
  }

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Product created successfully!');
      this.router.navigate(['/products']);
    })

  }

  cancel(): void {
    this.router.navigate(['/products']);
  }

}
