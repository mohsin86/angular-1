import {IngredientsModel} from '../recipes/ingredients.model';
import {EventEmitter} from '@angular/core';

export class IngredientsServices {
    loadNewIngredients = new EventEmitter<IngredientsModel[]>()

    private ingredients: IngredientsModel[]  = [
        new IngredientsModel('Apple', 10),
        new IngredientsModel('Tomato', 10),
        new IngredientsModel('Egg', 30),
        new IngredientsModel('Potato', 25),
        new IngredientsModel('Prawn', 10),
    ];
    getIngredients(): IngredientsModel[]{
        // Shallow
        return this.ingredients.slice();
    }

    addIngredients(ingredient: IngredientsModel): void{
         this.ingredients.push(ingredient);

        // Needed to load again, since we send first shallow copy, not hte orginal
         this.loadNewIngredients.emit(this.ingredients.slice());
    }

    reduceIngredientsAmount(ingredients: IngredientsModel[]): void{
        for (const ingredient of ingredients){
           const findRecipeIndex = this.ingredients.findIndex(ing => ing.ingredientsName === ingredient.ingredientsName );
           const amountIndex = this.ingredients[findRecipeIndex].ingredientsAmount;
           this.ingredients[findRecipeIndex].ingredientsAmount = amountIndex - ingredient.ingredientsAmount;
        }

        // Needed to load again, since we send first shallow copy, not hte orginal
        this.loadNewIngredients.emit(this.ingredients.slice());
    }
}
