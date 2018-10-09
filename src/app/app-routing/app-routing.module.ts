import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { RecipePageComponent } from "../recipes/pages/recipe-page/recipe-page.component";
import { RecipesPageComponent } from "../recipes/pages/recipes-page/recipes-page.component";

const routes: Routes = [
  { path: "", component: RecipesPageComponent },
  { path: "recept/:id", component: RecipePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}
