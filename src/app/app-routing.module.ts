import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CareersComponent } from './careers/careers.component';
import { BackgroundComponent } from './background/background.component';
import { ContactsComponent } from './contacts/contacts.component';
import { JobListComponent } from './job-list/job-list.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/careers', pathMatch: 'full' },
  {path: 'careers', component: CareersComponent},
  {path: 'background', component: BackgroundComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'joblist', component: JobListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
