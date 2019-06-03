import {Ingredient} from '../shared/ingredient.model';

export class ShoppingListService {

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 5)
  ];

  public getIngredients() {
    return this.ingredients.slice();
  }

  public addNewIngredient(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
  }

}
