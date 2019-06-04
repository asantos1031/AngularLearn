import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameRef: ElementRef;
  @ViewChild('amountInput') amountRef: ElementRef;

  onAddClick() {
    const name = this.nameRef.nativeElement.value;
    const amount = this.amountRef.nativeElement.value;
    const ingredient = new Ingredient(name, amount);
    this.shoppingListService.addNewIngredient(ingredient);
  }

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }
}
