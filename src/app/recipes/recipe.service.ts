import { Injectable, EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingListService: ShoppingListService) {}

  private recipes: Recipe[] = [
    new Recipe(
      'Test Recipe', 
      'This is just a test', 
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqqxHemGDCQK4ulOWZyecL4hqsJTVnibRInQ&usqp=CAU',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe(
      'Test Recipe 2', 
      'This is another test', 
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqqxHemGDCQK4ulOWZyecL4hqsJTVnibRInQ&usqp=CAU',
      [
        new Ingredient('Bread', 2),
        new Ingredient('Meat', 1)
      ])
  ];

  getRecipes() {
    return this.recipes.slice(); // makes a copy of the array 
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

}

