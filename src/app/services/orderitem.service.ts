import { Injectable } from '@angular/core';
import { ORDERITEMS } from "../order_item_list";
import { PRODUCTS } from "../product_list";
import { OrderItem } from "../models/orderitem";
import { of } from 'rxjs/observable/of';
import { Observable } from "rxjs/Observable";
import { OrderDetails } from "../models/orderdetails";
import { DecimalPipe } from '@angular/common';

@Injectable()
export class OrderitemService {

  constructor() { }

  getOrderItems(orderId: number): Observable<OrderDetails[]> {
    let orderDetails: OrderDetails[] = new Array<OrderDetails>();
    let orderItemsById = ORDERITEMS.filter(orderItem => orderItem.orderId == orderId);

    for (let i = 0; i < orderItemsById.length; i++) {

      let product = PRODUCTS.find(product => product.id == orderItemsById[i].productId);
      let od = new OrderDetails();
      od.productName = product.name;
      od.unitPrice = product.price;
      od.quantity = orderItemsById[i].quantity;
      od.total = od.unitPrice * od.quantity;
      orderDetails.push(od);
    }

    return of(orderDetails);
  }
}
