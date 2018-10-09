import { Component, OnInit } from "@angular/core";
import { Recipe } from "../../../models/recipe";

@Component({
  selector: "app-recipes-page",
  templateUrl: "./recipes-page.component.html",
  styleUrls: ["./recipes-page.component.css"]
})
export class RecipesPageComponent implements OnInit {
  recipe: Recipe = {
    id: 1,
    cuisine: "Hoofdgerecht",
    ingredients: []
  };

  constructor() {}

  ngOnInit() {}
}
