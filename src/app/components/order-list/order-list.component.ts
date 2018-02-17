import { Component, OnInit } from '@angular/core';
import { Order } from '../../models/order';
import { ORDERS } from '../../order_list';
import { Router } from '@angular/router';
import { OrderlistService } from "../../services/orderlist.service";
import { Pagination } from "./pagination";

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  pagination: Pagination;
  currentPageNumber: number = 1;
  public searchString: string;
  constructor(private router: Router, private orderService: OrderlistService) { }

  ngOnInit() {
    this.orderService.getOrders().subscribe(orders => {
      this.pagination = new Pagination(orders);
      this.changeRoute(1);
    });
  }

  changeRoute(pageNumber: number) {
    this.pagination.getPageLines(pageNumber);
    this.router.navigateByUrl("/orders/" + this.pagination.pageLines[0].id);
    this.currentPageNumber = pageNumber;
  }

  filter() {
    this.pagination.filter(this.searchString);
    this.router.navigateByUrl("/orders/" + this.pagination.pageLines[0].id);
  }

  onClick(order: Order) {
    console.log("Paspaudziau: " + order.id + " pavadinimas: " + order.customerName);
  }
}
