import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();


    private recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe',
            'This is a Simply test',
            'https://www.goya.com/media/5284/no-bake-icon.png',
            [
                new Ingredient('Bread',1),
                new Ingredient('Milk',10)
            ]),
        new Recipe(
            'A Test Recipe Test',
            'This is a Simply test Again',
            'http://recipeworldapp.com/assets/images/app-store-265x265.png',
            [
                new Ingredient('Buns',2),
                new Ingredient('Milk',2)
            ])
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}