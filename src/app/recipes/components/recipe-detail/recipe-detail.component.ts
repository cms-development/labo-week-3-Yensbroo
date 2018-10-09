import { Component, OnInit } from "@angular/core";
import { RECIPES } from "../../../data/mock-recipes";
import { RecipeService } from "src/app/services/recipe.service";
import { ActivatedRoute } from "@angular/router";
import { Recipe } from "src/app/models/recipe";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"]
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getRecipe();
  }

  getRecipe() {
    const id = +this.route.snapshot.paramMap.get("id");
    this.recipeService.getRecipe(id).subscribe(recipe => {
      this.recipe = recipe;
    });
  }
}
