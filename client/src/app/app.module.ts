import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { BodyComponent } from "./components/body/body.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HomeComponent } from "./components/home/home.component";
import { NewsComponent } from "./components/news/news.component";
import { Top10Component } from "./components/top10/top10.component";
import { SearchComponent } from "./components/search/search.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { PostDetalisComponent } from "./components/post-detalis/post-detalis.component";
import { AdminPageComponent } from "./pages/admin-page/admin-page.component";
import { ContentPageComponent } from "./pages/content-page/content-page.component";
import { SearchPipe } from "./pipes/search.pipe";
import { GoogleMapComponent } from './components/google-map/google-map.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    HomeComponent,
    NewsComponent,
    Top10Component,
    SearchComponent,
    PostDetalisComponent,
    AdminPageComponent,
    ContentPageComponent,
    SearchPipe,
    GoogleMapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
