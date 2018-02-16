import { Injectable } from '@angular/core';
import { ORDERS } from "../order_list";
import { Order } from "../models/order";
import { of } from 'rxjs/observable/of';
import { Observable } from "rxjs/Observable";

@Injectable()
export class OrderlistService {

  constructor() { }
  getOrders(): Observable<Order[]> {

    ORDERS.sort((a,b) => {
      let a1 = new Date(a.date);
      let b1 = new Date(b.date);
      return b1 > a1 ? 1 : -1;  
    });

    return of(ORDERS);
  }
}
