import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ActivitypageComponent } from './activitypage/activitypage.component';
import { OpportunitiespageComponent } from './opportunitiespage/opportunitiespage.component';
import { NavbarpageComponent } from './navbarpage/navbarpage.component';
import { FooterpageComponent } from './footerpage/footerpage.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { InboxpageComponent } from './inboxpage/inboxpage.component';
import { SettingspageComponent } from './settingspage/settingspage.component';
import { SearchjobspageComponent } from './homepage/searchjobspage/searchjobspage.component';
import { SearchtabpageComponent } from './homepage/searchjobspage/searchtabpage/searchtabpage.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ActivitypageComponent,
    OpportunitiespageComponent,
    NavbarpageComponent,
    FooterpageComponent,
    ProfilepageComponent,
    InboxpageComponent,
    SettingspageComponent,
    SearchjobspageComponent,
    SearchtabpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
