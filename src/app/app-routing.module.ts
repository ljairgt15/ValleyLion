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

const routes: Routes = [
  {path:'',component:IndexComponent},
  {path:'tienda',component:OnlineStoreComponent},
  {path:'sobre-nosotros',component:AboutUsComponent},
  {path:'contactanos',component:ContactComponent},
  {path:'equipos', component:TeamsComponent},
  {path:'trofeos', component: TrophiesComponent},
  {path:'galeria', component:GalleryComponent},
  {path:'noticias',component:NewsComponent},
  {path:'trofeos',component:TrophiesComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
