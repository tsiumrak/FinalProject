import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { NewsComponent } from "./components/news/news.component";
import { PostDetalisComponent } from "./components/post-detalis/post-detalis.component";
import { SearchComponent } from "./components/search/search.component";
import { Top10Component } from "./components/top10/top10.component";
import { AdminPageComponent } from "./pages/admin-page/admin-page.component";
import { ContentPageComponent } from "./pages/content-page/content-page.component";
import { NotFoundPageComponent } from "./pages/not-found-page/not-found-page.component";

const routes: Routes = [
  { path: "admin-page", component: AdminPageComponent },
  {
    path: "content-page",
    component: ContentPageComponent,
    children: [
      { path: "home", component: HomeComponent },
      { path: "detalis/:id", component: PostDetalisComponent },

      { path: "news", component: NewsComponent },
      { path: "top", component: Top10Component },
      { path: "search", component: SearchComponent },
    ],
  },

  { path: "", redirectTo: "/content-page/home", pathMatch: "full" },
  { path: "**", component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
