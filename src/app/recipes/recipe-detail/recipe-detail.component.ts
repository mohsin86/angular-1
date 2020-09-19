import {Component, Input, OnInit} from '@angular/core';
import {RecipesServices} from '../../services/recipes.services';
import {IngredientsModel} from '../../recipes/ingredients.model';
import {ShoppingServices} from '../../services/shopping.services';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})

export class RecipeDetailComponent implements OnInit {
  // tslint:disable-next-line:max-line-length
  @Input() showDetails: { id: number,  recipeName: string, recipeDesc: string, recipeImagePath: string, recipeIngredient: IngredientsModel[]};

  constructor(public recipesServices: RecipesServices, public shopingServices: ShoppingServices) {}

  ngOnInit(): void {
    // Get First Recipe when page load
    this.showDetails = {
      id: this.recipesServices.getRecipe(0).id,
      recipeIngredient: this.recipesServices.getRecipe(0).ingredients,
      recipeName: this.recipesServices.getRecipe(0).name,
      recipeDesc: this.recipesServices.getRecipe(0).description,
      recipeImagePath: this.recipesServices.getRecipe(0).imagePath,
    };

    this.recipesServices.recipeSelected.subscribe(
        (data) => {
      this.showDetails = {
        id: data.id,
        recipeName: data.name,
        recipeDesc: data.description,
        recipeImagePath: data.imagePath,
        recipeIngredient: data.ingredients
      };
    });
  }

  onAddShoppingList($event, id: number): void {
    $event.preventDefault();
  //  this.shopingServices.addShoping(ingridients);
    this.recipesServices.addToShoppingList(id);
  }
}
