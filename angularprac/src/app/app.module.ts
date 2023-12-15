import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomepageComponent } from './homepage/homepage.component';
import { ActivitypageComponent } from './activitypage/activitypage.component';
import { OpportunitiespageComponent } from './opportunitiespage/opportunitiespage.component';
import { NavbarpageComponent } from './navbarpage/navbarpage.component';
import { FooterpageComponent } from './footerpage/footerpage.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { InboxpageComponent } from './inboxpage/inboxpage.component';
import { SettingspageComponent } from './settingspage/settingspage.component';

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
