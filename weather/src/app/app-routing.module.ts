import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  // { path: "favourites", redirectTo: "/favourites", pathMatch: "full" },
  // ,
  // { path: "main", redirectTo: "/main", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
