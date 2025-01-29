import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { OnlineStoreComponent } from './components/online-store/online-store.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { TeamsComponent } from './components/teams/teams.component';
import { TrophiesComponent } from './components/trophies/trophies.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { NewsComponent } from './components/news/news.component';
import { CatalogTeamComponent } from './components/catalog-team/catalog-team.component';

const routes: Routes = [
  {path:'leones-del-valle-oyambarillo',component:IndexComponent},
  {path:'leones-del-valle-oyambarillo/tienda',component:OnlineStoreComponent},
  {path:'leones-del-valle-oyambarillo/sobre-nosotros',component:AboutUsComponent},
  {path:'leones-del-valle-oyambarillo/contactanos',component:ContactComponent},
  {path:'leones-del-valle-oyambarillo/equipos/:id', component:TeamsComponent},
  {path:'leones-del-valle-oyambarillo/equipos', component:CatalogTeamComponent},
  {path:'leones-del-valle-oyambarillo/trofeos', component: TrophiesComponent},
  {path:'leones-del-valle-oyambarillo/galeria', component:GalleryComponent},
  {path:'leones-del-valle-oyambarillo/noticias',component:NewsComponent},
  {path:'leones-del-valle-oyambarillo/trofeos',component:TrophiesComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
