import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {RecipesServices} from '../../../services/recipes.services';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input('listDetails') recipe: {name: string, description: string, imagePath: string};
  @Input('index') i: number;
 // @Output() indexClick = new EventEmitter<{indexAtClick: number}>();

  constructor(public recipesServices: RecipesServices) {  }

  ngOnInit(): void {
  }

  onClickGetDetails($event, i: number): void{
    $event.preventDefault();
    // this.indexClick.emit({
    //   indexAtClick: i
    // });
    this.recipesServices.recipeSelected.emit({
      id: this.recipesServices.getRecipe(i).id,
      ingredients: this.recipesServices.getRecipe(i).ingredients,
      name: this.recipesServices.getRecipe(i).name,
      description: this.recipesServices.getRecipe(i).description,
      imagePath: this.recipesServices.getRecipe(i).imagePath
    });

  }
}
