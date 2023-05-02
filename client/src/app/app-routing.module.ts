import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./components/admin/admin.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { NewsComponent } from "./components/news/news.component";
import { SearchComponent } from "./components/search/search.component";
import { Top10Component } from "./components/top10/top10.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "news", component: NewsComponent },
  { path: "top", component: Top10Component },
  { path: "search", component: SearchComponent },
  { path: "admin", component: AdminComponent },
  { path: "login", component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
