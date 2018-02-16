import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductsComponent } from './components/products/products.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { HeaderComponent } from './components/header/header.component';
import { OrdersComponent } from './components/orders/orders.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { TestComponent } from './components/test/test.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { ProductService } from './services/product.service';
import { FormsModule } from '@angular/forms';
import { ProductfilterPipe } from './productfilter.pipe';
import { OrderitemService } from './services/orderitem.service';
import { OrderlistService } from './services/orderlist.service';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    ProductsComponent,
    SearchBoxComponent,
    HeaderComponent,
    OrdersComponent,
    OrderDetailsComponent,
    TestComponent,
    HomeComponent,
    ProductListComponent,
    OrderListComponent,
    ProductfilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductService, OrderitemService, OrderlistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
