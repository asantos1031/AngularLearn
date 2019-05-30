import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Eggs', 'Scrambled eggs',
      'https://www.wellplated.com/wp-content/uploads/2017/12/Hoppin-John-recipe-600x629.jpg',
      ['Eggs', 'Onions', 'tomatoes']),
    new Recipe('Ham', 'Scrambled ham',
      'https://www.wellplated.com/wp-content/uploads/2017/12/Hoppin-John-recipe-600x629.jpg',
      ['Ham', 'Oil', 'Pasta']),
    new Recipe('Bacon', 'Scrambled bacon',
      'https://www.wellplated.com/wp-content/uploads/2017/12/Hoppin-John-recipe-600x629.jpg',
      ['Bacon', 'Salt', 'Pepper']),
    new Recipe('Cheese', 'Scrambled cheese',
      'https://www.wellplated.com/wp-content/uploads/2017/12/Hoppin-John-recipe-600x629.jpg',
      ['Cheese', 'Blue Cheese', 'Parmesan Cheese'])
  ];

  @Output() emitRecipe = new EventEmitter<Recipe>()
  pushRecipe(recipeEl: Recipe) {
    this.emitRecipe.emit(recipeEl);
  }
  constructor() { }

  ngOnInit() {
  }

}
