import {IngredientsModel} from '../recipes/ingredients.model';
export class RecipeModel {
    public id;
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: IngredientsModel[];

    constructor(id: number, name: string, desc: string, imagePath: string, ingredients: IngredientsModel[]) {
        this.id = id;
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
    }
}
