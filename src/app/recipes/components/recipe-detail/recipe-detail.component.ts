import { Component, OnInit } from "@angular/core";
import { RecipeService } from "src/app/services/recipe.service";
import { ActivatedRoute } from "@angular/router";
import { Recipe } from "src/app/models/recipe";
import { Location } from "@angular/common";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"]
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private location: Location
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

  goBack() {
    this.location.back();
  }
}
