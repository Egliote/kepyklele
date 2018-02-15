import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductListComponent } from "./components/product-list/product-list.component";
import { OrderListComponent } from "./components/order-list/order-list.component";
import { OrderDetailsComponent } from "./components/order-details/order-details.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'products', component: ProductsComponent, children: [
      {
        path: ':categoryId', component: ProductListComponent
      }]
  },
  {
    path: 'orders', component: OrdersComponent, children: [
      {
        path: ':orderId', component: OrderDetailsComponent
      }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
