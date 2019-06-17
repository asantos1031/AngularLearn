import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  constructor(private slService: ShoppingListService) {}

  private recipes: Recipe[] = [
    new Recipe('Eggs', 'Scrambled eggs',
      'https://www.wellplated.com/wp-content/uploads/2017/12/Hoppin-John-recipe-600x629.jpg',
      [new Ingredient('Eggs', 2),
                  new Ingredient('Onions', 3),
                  new Ingredient('tomatoes', 4)]),
    new Recipe('Ham', 'Scrambled ham',
      'https://www.wellplated.com/wp-content/uploads/2017/12/Hoppin-John-recipe-600x629.jpg',
      [ new Ingredient('Ham', 2),
                    new Ingredient('Oil', 3),
                    new Ingredient('Pasta',4)]),
    new Recipe('Bacon', 'Scrambled bacon',
      'https://www.wellplated.com/wp-content/uploads/2017/12/Hoppin-John-recipe-600x629.jpg',
      [new Ingredient('Bacon', 2),
                    new Ingredient('Salt', 3),
                    new Ingredient('Pepper', 4)]),
    new Recipe('Cheese', 'Scrambled cheese',
      'https://www.wellplated.com/wp-content/uploads/2017/12/Hoppin-John-recipe-600x629.jpg',
      [new Ingredient('Cheese', 2),
                    new Ingredient('Blue Cheese', 3),
                    new Ingredient('Parmesan Cheese', 5)])
  ];

  recipeSelected = new EventEmitter<Recipe>();

  public getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToSL(ingredients: Ingredient[]) {
    this.slService.addNewIngredients(ingredients);
  }
}
