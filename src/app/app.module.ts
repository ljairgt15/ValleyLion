import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { OnlineStoreComponent } from './components/online-store/online-store.component';
import { ContactComponent } from './components/contact/contact.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { TrophiesComponent } from './components/trophies/trophies.component';
import { TeamsComponent } from './components/teams/teams.component';
import { NewsComponent } from './components/news/news.component';
import { NavComponent } from './components/nav/nav.component';
import { CatalogTeamComponent } from './components/catalog-team/catalog-team.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AboutUsComponent,
    OnlineStoreComponent,
    ContactComponent,
    GalleryComponent,
    TrophiesComponent,
    TeamsComponent,
    NewsComponent,
    NavComponent,
    CatalogTeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
