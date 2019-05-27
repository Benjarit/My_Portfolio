import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './root/app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CareersComponent } from './careers/careers.component';
import { BackgroundComponent } from './background/background.component';
import { ContactsComponent } from './contacts/contacts.component';
import { LandingPageComponent } from './landing-page/landing-page.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CareersComponent,
    BackgroundComponent,
    ContactsComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
