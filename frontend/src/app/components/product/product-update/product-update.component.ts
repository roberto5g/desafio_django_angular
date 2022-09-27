import { HeaderService } from './../../template/header/header.service';
import { Category } from './../../category/category.model';
import { Product } from './../product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../category/category.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product!: Product
  categories: Category[] = []

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute,
    private headerService: HeaderService 
    ) { 
      headerService.headerData = {
        title: 'Product edit',
        icon: 'storefront',
        routeUrl: ''
      }
    }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.categoryService.read().subscribe(categories => {
      this.categories = categories
    })
    this.productService.readById(id as string).subscribe(product => {
      this.product = product
    })
    
  }

  updateProduct(): void {
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage('Product successfully updated!')
      this.router.navigate(['/products'])
    })
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }

}
