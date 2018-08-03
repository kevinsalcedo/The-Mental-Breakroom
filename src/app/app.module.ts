import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './/app-routing.module';
import { BlankComponent } from './blank/blank.component';
import { StoryFormComponent } from './story-form/story-form.component';
import { StoriesComponent } from './stories/stories.component';
import { StoryDetailComponent } from './story-detail/story-detail.component';
import { DisordersComponent } from './disorders/disorders.component';
import { DisorderDetailComponent } from './disorder-detail/disorder-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ContactComponent,
    BlankComponent,
    StoryFormComponent,
    StoriesComponent,
    StoryDetailComponent,
    DisordersComponent,
    DisorderDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
