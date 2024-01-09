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



const firebaseConfig = {
  apiKey: "AIzaSyCTuno_tWZ17imxnFgPNi8AYdgx22BcyHs",
  authDomain: "angularprac-2a989.firebaseapp.com",
  projectId: "angularprac-2a989",
  storageBucket: "angularprac-2a989.appspot.com",
  messagingSenderId: "766069400814",
  appId: "1:766069400814:web:7cb719d2fd336f0ff63fff",
  measurementId: "G-73N5LY7G3R"
};

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
    SearchjobspageComponent
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
