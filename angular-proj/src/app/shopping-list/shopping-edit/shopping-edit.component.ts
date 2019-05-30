import {Component, EventEmitter, OnInit, ViewChild, Output, ElementRef} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameRef: ElementRef;
  @ViewChild('amountInput') amountRef: ElementRef;

  @Output() newIngredient = new EventEmitter<Ingredient>()

  onAddClick() {
    this.newIngredient.emit(new Ingredient(this.nameRef.nativeElement.value, this.amountRef.nativeElement.value));
  }

  constructor() { }

  ngOnInit() {
  }
}
