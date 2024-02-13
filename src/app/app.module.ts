import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { MoviesComponent } from './movies/movies.component';
import { RouterModule } from '@angular/router';
import { MainsliderComponent } from './mainslider/mainslider.component';
import { TvshowComponent } from './tvshow/tvshow.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { ActordetailsComponent } from './actordetails/actordetails.component';
import { TvdetailsComponent } from './tvdetails/tvdetails.component';
import { ActorsComponent } from './actors/actors.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavbarComponent,
    NotfoundComponent,
    MoviesComponent,
    MainsliderComponent,
    TvshowComponent,
    MoviedetailsComponent,
    ActordetailsComponent,
    TvdetailsComponent,
    ActorsComponent,
    LoadingComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    CarouselModule,
    ToastrModule.forRoot(
      {
        timeOut: 2000,
        positionClass: 'toast-top-left',
        progressBar: false,
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
