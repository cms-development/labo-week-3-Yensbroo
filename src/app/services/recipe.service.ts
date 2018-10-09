import { Injectable } from "@angular/core";
import { RECIPES } from "../data/mock-recipes";
import { Recipe } from "../models/recipe";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class RecipeService {
  constructor() {}

  getRecipes(): Observable<Recipe[]> {
    return of(RECIPES);
  }

  getRecipe(id: number): Observable<Recipe> {
    return of(RECIPES.find(recipe => recipe.id === id));
  }
}
