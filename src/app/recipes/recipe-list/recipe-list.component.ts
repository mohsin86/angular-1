import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {RecipeModel} from '../recipe.model';
import {RecipesServices} from '../../services/recipes.services';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],

})
export class RecipeListComponent implements OnInit {
    Recipes: RecipeModel[];

 // @Output() recipeDetails = new EventEmitter <{recipeName: string, recipeDesc: string, recipeImagePath: string}>();


  constructor(public recipesServices: RecipesServices) {}

  ngOnInit(): void {
      this.Recipes = this.recipesServices.getRecipes();
  }

    // onIndexClick($event): void {
    //   const currentPosition: number = $event.indexAtClick ;
    //   this.recipeDetails.emit({
    //       recipeName: this.Recipes[currentPosition].name,
    //       recipeDesc: this.Recipes[currentPosition].description,
    //       recipeImagePath: this.Recipes[currentPosition].imagePath,
    //   });
    // }
}
