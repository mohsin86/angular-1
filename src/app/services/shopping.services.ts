import {IngredientsModel} from '../recipes/ingredients.model';
import { Subject } from 'rxjs/Subject' ;

export class ShoppingServices {
    removeShopping = new Subject<number>();


    private shopping: IngredientsModel[] = [];

    getShopingList(): IngredientsModel[] {
        return this.shopping;
    }

    addShoping(ingredients: IngredientsModel[]): void {
        this.shopping.push(...ingredients) ;
    }




}
