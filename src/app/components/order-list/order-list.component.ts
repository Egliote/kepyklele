import { Component, OnInit } from '@angular/core';
import { Order } from '../../models/order';
import { ORDERS } from '../../order_list';
import { Router } from '@angular/router';
import { OrderlistService } from "../../services/orderlist.service";

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  orders: Order[];
  constructor(private router: Router, private orderService: OrderlistService) { }

  ngOnInit() {
    this.orderService.getOrders().subscribe(orders => {
      this.orders = orders
      this.router.navigateByUrl("/orders/" + orders[0].id);
    });
  }
  onClick(order: Order) {
    console.log("Paspaudziau: " + order.id + " pavadinimas: " + order.customerName);
  }
}
