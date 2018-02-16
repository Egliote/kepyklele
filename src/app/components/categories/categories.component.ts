import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category';
import { CATEGORIES } from '../../categ_list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories = CATEGORIES;
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigateByUrl("/products/1");
  }

  onClick( category:Category ) {
    console.log("Paspaudziau: " + category.id + " pavadinimas: " + category.name );
  }
}
