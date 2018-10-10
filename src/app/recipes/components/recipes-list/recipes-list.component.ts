import { Component, OnInit } from "@angular/core";
import { Recipe } from "../../../models/recipe";
import { RecipeService } from "src/app/services/recipe.service";

@Component({
  selector: "app-recipes-list",
  templateUrl: "./recipes-list.component.html",
  styleUrls: ["./recipes-list.component.css"]
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.getRecipes();
  }

  getRecipes() {
    // this.recipeService.getRecipes().subscribe(recipes => {
    //   this.recipes = recipes;
    // });
    this.recipeService.getRecipes().subscribe(recipes => {
      this.recipes = recipes;
      console.log(recipes);
    });
  }
}
