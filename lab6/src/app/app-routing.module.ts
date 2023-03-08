import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {AlbumsComponent} from "./albums/albums.component";
import {AlbumsdetailsComponent} from "./albumsdetails/albumsdetails.component";
import {PhotosComponent} from "./photos/photos.component";

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path: 'about', component:AboutComponent},
  {path:'albums', component: AlbumsComponent},
  {path: 'albums/:id', component:AlbumsdetailsComponent},
  {path: 'albums/:id/photos', component:PhotosComponent},
  {path: 'albums/:id/albums/:id/photos', redirectTo:'albums/:id/photos', pathMatch:'full'},
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path:'**', component: NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
