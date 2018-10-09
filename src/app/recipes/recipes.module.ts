import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RecipesPageComponent } from "./pages/recipes-page/recipes-page.component";
import { RecipePageComponent } from "./pages/recipe-page/recipe-page.component";
import { RecipesListComponent } from "./components/recipes-list/recipes-list.component";
import { RecipeDetailComponent } from "./components/recipe-detail/recipe-detail.component";
import { AppRoutingModule } from "../app-routing/app-routing.module";

@NgModule({
  imports: [CommonModule, AppRoutingModule],
  declarations: [
    RecipesPageComponent,
    RecipePageComponent,
    RecipesListComponent,
    RecipeDetailComponent
  ]
})
export class RecipesModule {}
