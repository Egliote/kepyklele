import { Component, OnInit } from '@angular/core';
import { OrderItem } from '../../models/orderitem';
import { ORDERITEMS } from '../../order_item_list';
@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  OrderItems = ORDERITEMS;
  constructor() { }

  ngOnInit() {
  }

}
