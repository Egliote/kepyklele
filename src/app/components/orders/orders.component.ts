import { Component, OnInit } from '@angular/core';
import { Order } from '../../models/order';
import { ORDERS } from '../../order_list';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders=ORDERS;
  constructor() { }

  ngOnInit() {
  }
  onClick(order: Order) {
    console.log("Paspaudziau: " + order.id + " klientas: " + order.customerName);
  }
}
