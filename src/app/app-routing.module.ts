import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MoviesComponent } from './movies/movies.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { TvshowComponent } from './tvshow/tvshow.component';
import { authGuard } from './auth.guard';
import { ActorsComponent } from './actors/actors.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { ActordetailsComponent } from './actordetails/actordetails.component';
import { TvdetailsComponent } from './tvdetails/tvdetails.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'moviedetails/:id', canActivate: [authGuard], component: MoviedetailsComponent },
  { path: 'tvdetails/:id', canActivate: [authGuard], component: TvdetailsComponent },
  { path: 'actordetails/:id', canActivate: [authGuard], component: ActordetailsComponent },
  { path: 'movies', canActivate: [authGuard], component: MoviesComponent },
  { path: 'actors', canActivate: [authGuard], component: ActorsComponent },
  { path: 'tvshows', canActivate: [authGuard], component: TvshowComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
