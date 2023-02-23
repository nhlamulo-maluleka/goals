import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoalsComponent } from './goals/goals.component';
import { TopNavComponent } from './goals/views/top-nav/top-nav.component';
import { GeekGoalsComponent } from './goals/views/geek-goals/geek-goals.component';

@NgModule({
  declarations: [
    AppComponent,
    GoalsComponent,
    TopNavComponent,
    GeekGoalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
