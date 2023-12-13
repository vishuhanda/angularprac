import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ActivitypageComponent } from './activitypage/activitypage.component';
import { OpportunitiespageComponent } from './opportunitiespage/opportunitiespage.component';
import { InboxpageComponent } from './inboxpage/inboxpage.component';
import { SettingspageComponent } from './settingspage/settingspage.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';

const routes: Routes = [
  { path: '',redirectTo: 'home',pathMatch:'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'activity', component: ActivitypageComponent },
  { path: 'opportunities', component: OpportunitiespageComponent },
  { path: 'profile', component: ProfilepageComponent },
  { path: 'inbox', component: InboxpageComponent },
  { path: 'settings', component: SettingspageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
