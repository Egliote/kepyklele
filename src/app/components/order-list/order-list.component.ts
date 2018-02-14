import { Component, OnInit } from '@angular/core';
import { Order } from '../../models/order';
import { ORDERS } from '../../order_list';
@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  orders = ORDERS;
  constructor() { }

  ngOnInit() {
  }
  onClick(order: Order) {
    console.log("Paspaudziau: " + order.id + " pavadinimas: " + order.customerName);
  }
}
