import { Component, OnInit } from '@angular/core';
import {RecipesServices} from '../services/recipes.services';
import {IngredientsServices} from '../services/ingredients.services';
import {IngredientsModel} from '../recipes/ingredients.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipesServices, IngredientsServices]
})
export class RecipesComponent implements OnInit {
  ingredients: IngredientsModel[];
  recipeDetails: {id: number, recipeName: string, recipeDesc: string, recipeImagePath: string} = {
    id: 0,
    recipeName : '',
    recipeDesc : '',
    recipeImagePath : '',
  };
  constructor(public recipesServices: RecipesServices, public ingredientServices: IngredientsServices) {

  }

  ngOnInit(): void {
    this.ingredients = this.ingredientServices.getIngredients();
  }

  // onGettingRecipe(recipeDetails: {id: number, recipeName: string, recipeDesc: string, recipeImagePath: string}): void{
  //   this.recipeDetails = recipeDetails;
  // }
}
