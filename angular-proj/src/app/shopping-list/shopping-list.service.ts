import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter, Injectable, OnInit} from '@angular/core';
import {Recipe} from '../recipes/recipe.model';
import {RecipeService} from '../recipes/recipe.service';

@Injectable()
export class ShoppingListService implements OnInit{
  ingredientsChannged = new EventEmitter<Ingredient[]>();

  constructor(private recipe: RecipeService) {
  }

  private ingredients: Ingredient[] = [];

  public getIngredients() {
    return this.ingredients.slice();
  }

  public addNewIngredient(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
    this.ingredientsChannged.emit(this.ingredients.slice());
  }

  ngOnInit(): void {
    this.recipe.recipeSelected.subscribe((recipeList: Recipe) => {
      this.ingredients = recipeList.ingredientList;
      console.log(recipeList.ingredientList);
      this.ingredientsChannged.emit(this.ingredients.slice());
    });
  }
}
