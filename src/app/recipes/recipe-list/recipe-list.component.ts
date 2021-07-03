import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is just a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqqxHemGDCQK4ulOWZyecL4hqsJTVnibRInQ&usqp=CAU'),
    new Recipe('Test Recipe 2', 'This is another test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqqxHemGDCQK4ulOWZyecL4hqsJTVnibRInQ&usqp=CAU')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
