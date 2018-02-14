import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category';
import { CATEGORIES } from '../../categ_list';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories = CATEGORIES;
  constructor() { }

  ngOnInit() {
  }

  onClick( category:Category ) {
    console.log("Paspaudziau: " + category.id + " pavadinimas: " + category.name );
  }
}
