import {EventEmitter, Injectable} from '@angular/core' ;
import {RecipeModel} from '../recipes/recipe.model';
import {IngredientsModel} from '../recipes/ingredients.model';
import {ShoppingServices} from '../services/shopping.services';
import {IngredientsServices} from '../services/ingredients.services';

// with Injectable a service can communicate with other service
@Injectable()

export class RecipesServices {
    recipeSelected = new EventEmitter<RecipeModel>();
    constructor(public shoppingServices: ShoppingServices, public ingredientsServices: IngredientsServices) {}
    private Recipes: RecipeModel[] = [
        new RecipeModel(1, 'Recipes Gajar', 'Indian Recipes Gajar Ka Halwa A Dessert Recipe from Indian',
            'assets/image/recipe/Gajor-Recipes.jpg', [
                new IngredientsModel('Apple', 2),
                new IngredientsModel('Tomato', 3),
            ]),
        new RecipeModel(2, 'scrambled eggs', 'Indian Recipes Gajar Ka Halwa A Dessert Recipe from Indian', 'assets/image/recipe/scrambled-eggs.webp', [
            new IngredientsModel('Egg', 4),
            new IngredientsModel('Potato', 2)
        ]),
        new RecipeModel(3, 'Tasty Breakfast Burritos', 'Baked tortillas, packed with sausage, cheese and eggs. Swimming in a hearty sausage gravy.', 'assets/image/recipe/tasty-breakfast-burritos.webp',[
            new IngredientsModel('Egg', 2),
            new IngredientsModel('Potato', 1),
        ]),
        new RecipeModel(4, 'Homemade Granola', 'Any dried fruit can be substituted for the raisins.', 'assets/image/recipe/homemade-granola.webp',[
            new IngredientsModel('Prawn', 2),
            new IngredientsModel('Fish', 1),
        ])
    ];

    getRecipes(): RecipeModel[] {
        return this.Recipes.slice();
    }

    getRecipe(i): RecipeModel {
        return this.Recipes[i];
    }

    addToShoppingList(id: number): void {
        const findRecipeIndex = this.Recipes.findIndex(recipe => recipe.id === id );
        this.shoppingServices.addShoping(this.Recipes[findRecipeIndex].ingredients);
        this.ingredientsServices.reduceIngredientsAmount(this.Recipes[findRecipeIndex].ingredients);
    }


}
