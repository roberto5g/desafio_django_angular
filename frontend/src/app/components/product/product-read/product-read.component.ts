import { ConfirmDialogComponent } from './../../confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[] = []
  displayedColumns = ['id','name','category','price','description','action']

  constructor(
    private productService: ProductService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products
    })
  }

  deleteProduct(id: number): void {
    const url = ``
  }

  openDialog(id: number, name: string): void {
    
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: {id: id, name: name},
    });

    dialogRef.updatePosition({ top: '30px'});
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.productService.delete(id).subscribe(() => {
          this.productService.showMessage('Product deleted successfully!')
          this.ngOnInit()
        })
      }
    })
    
  }

}
