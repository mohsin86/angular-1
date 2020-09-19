import { Component, OnInit } from '@angular/core';
import {IngredientsModel} from '../recipes/ingredients.model';
import {ShoppingServices} from '../services/shopping.services';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
    shoppings: IngredientsModel[] ;
  constructor(public shoppingServices: ShoppingServices) { }

  ngOnInit(): void {
      this.shoppings = this.shoppingServices.getShopingList();

      this.shoppingServices.removeShopping.subscribe(
          (index) => {
              console.log(index);
          }
      );
  }

  removeIngredients(index: number): void{
    const removeVal = index;
    this.shoppingServices.removeShopping.next( index );
  }
}
