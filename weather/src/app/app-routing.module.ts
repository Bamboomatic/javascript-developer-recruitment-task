import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FavouritesComponent } from "./favourites/favourites.component";
import { MainComponent } from "./main/main.component";

const routes: Routes = [
  { path: "favourites", component: FavouritesComponent },
  { path: "main", component: MainComponent },
  { path: "", redirectTo: "/main", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
