import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { BodyComponent } from "./components/body/body.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HomeComponent } from "./components/home/home.component";
import { NewsComponent } from "./components/news/news.component";

import { SearchComponent } from "./components/search/search.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { PostDetalisComponent } from "./components/post-detalis/post-detalis.component";
import { AdminPageComponent } from "./pages/admin-page/admin-page.component";
import { ContentPageComponent } from "./pages/content-page/content-page.component";
import { SearchPipe } from "./pipes/search.pipe";
import { GoogleMapComponent } from "./components/google-map/google-map.component";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { LanguageSelectorComponent } from "./components/language-selector/language-selector.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { LikeComponent } from "./components/like/like.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { EditingPostsComponent } from "./components/editing-posts/editing-posts.component";
import { NewPostsComponent } from "./components/new-posts/new-posts.component";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    HomeComponent,
    NewsComponent,

    SearchComponent,
    PostDetalisComponent,
    AdminPageComponent,
    ContentPageComponent,
    SearchPipe,
    GoogleMapComponent,
    LanguageSelectorComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    LikeComponent,
    EditingPostsComponent,
    NewPostsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: "en",
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],

  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
