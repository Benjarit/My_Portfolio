import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './root/app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CareersComponent } from './careers/careers.component';
import { BackgroundComponent } from './background/background.component';
import { ContactsComponent } from './contacts/contacts.component';
import { InputUserDataFormComponent } from './input-user-data-form/input-user-data-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { JobListComponent } from './job-list/job-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CareersComponent,
    BackgroundComponent,
    ContactsComponent,
    InputUserDataFormComponent,
    LoginComponent,
    JobListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}