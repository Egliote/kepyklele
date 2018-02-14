import { Injectable } from '@angular/core';
import { PRODUCTS } from "../product_list";
import { Product } from "../models/product";
import { of } from 'rxjs/observable/of';
import { Observable } from "rxjs/Observable";

@Injectable()
export class ProductService {

  constructor() { }

  getProducts(categoryId: number): Observable<Product[]> {
    return of(PRODUCTS.filter(p => p.categoryId == categoryId));
  }

}
