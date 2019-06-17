import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter } from '@angular/core';


export class ShoppingListService {
  ingredientsChannged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  public getIngredients() {
    return this.ingredients.slice();
  }

  public addNewIngredient(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
    this.ingredientsChannged.emit(this.ingredients.slice());
  }

  addNewIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChannged.emit(this.ingredients.slice());
    console.log(this.ingredients);
  }

}
