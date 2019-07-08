import { Recipe } from "./recipe.model";

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is a Simply test', 'https://www.goya.com/media/5284/no-bake-icon.png'),
        new Recipe('A Test Recipe Test', 'This is a Simply test Again', 'http://recipeworldapp.com/assets/images/app-store-265x265.png')
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}