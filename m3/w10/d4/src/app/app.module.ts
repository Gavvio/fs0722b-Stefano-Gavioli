import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ActiveComponent } from './active/active.component';
import { InactiveComponent } from './inactive/inactive.component';
import { CardPostComponent } from './card-post/card-post.component';
import { UsersComponent } from './users/users.component';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { MaiuscoloPipe } from './maiuscolo.pipe';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ActiveComponent,
    InactiveComponent,
    CardPostComponent,
    UsersComponent,
    UsersDetailsComponent,
    PostDetailsComponent,
    MaiuscoloPipe,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
