import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { OrderItem } from '../../models/orderitem';
import { OrderitemService } from "../../services/orderitem.service";

import 'rxjs/add/operator/mergeMap';
import { Subscription } from "rxjs/Subscription";
import { OrderDetails } from "../../models/orderdetails";
import { DecimalPipe } from '@angular/common';
@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit, OnDestroy {
  orderDetails: Array<OrderDetails>;
  subsParams: Subscription;
  constructor(private orderitemService: OrderitemService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.subsParams = this.route.params
      .mergeMap(params => this.orderitemService.getOrderItems(+params['orderId']))
      .subscribe(orderDetails => this.orderDetails = orderDetails);
  }
  ngOnDestroy() {
    this.subsParams.unsubscribe();
  }
}
