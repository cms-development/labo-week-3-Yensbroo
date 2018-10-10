import { Injectable } from "@angular/core";
import { Recipe } from "../models/recipe";
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class RecipeService {
  apiURL = "https://yensbroo.cmsdevelopment.be/wp-json/wp/v2/recipes-api";
  constructor(private http: HttpClient) {}

  getRecipes(): Observable<any> {
    return this.http.get(this.apiURL);
  }

  getRecipe(id): Observable<any> {
    return this.http.get(this.apiURL + "/" + id);
  }
}
