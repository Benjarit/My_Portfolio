import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CareersComponent } from './careers/careers.component';
import { BackgroundComponent } from './background/background.component';
import { ContactsComponent } from './contacts/contacts.component';
import { JobListComponent } from './job-list/job-list.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { JoblisingGuard } from './joblising.guard';

const routes: Routes = [
  { path: '', redirectTo: '/careers', pathMatch: 'full' },
  {path: 'careers', component: CareersComponent},
  {path: 'background', component: BackgroundComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'login', component: LoginComponent, canActivate: [AuthGuard]},
  {path: 'joblist', component: JobListComponent, canActivate: [JoblisingGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}