import { Category } from './category.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  baseUrl = "http://127.0.0.1:8000/categories/"

  constructor(private http: HttpClient) { }

  read(): Observable<Category[]>{
    return this.http.get<Category[]>(this.baseUrl)
  }
}
