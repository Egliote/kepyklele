import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../../models/product';
import { ProductService } from "../../services/product.service";

import 'rxjs/add/operator/mergeMap';
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  search: string;
  products: Array<Product>;
  subsParams: Subscription;

  constructor(private productService: ProductService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subsParams = this.route.params
      .mergeMap(params => this.productService.getProducts(+params['categoryId']))
      .subscribe(products => this.products = products);
  }

  ngOnDestroy() {
    this.subsParams.unsubscribe();
  }
}
