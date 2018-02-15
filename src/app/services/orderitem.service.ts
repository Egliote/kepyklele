import { Injectable } from '@angular/core';
import { ORDERITEMS } from "../order_item_list";
import { OrderItem } from "../models/orderitem";
import { of } from 'rxjs/observable/of';
import { Observable } from "rxjs/Observable";

@Injectable()
export class OrderitemService {

  constructor() { }

  getOrderItems(orderId: number): Observable<OrderItem[]> {
    return of(ORDERITEMS.filter(orderItem => orderItem.orderId == orderId));
  }
}
