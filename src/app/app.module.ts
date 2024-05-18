import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
