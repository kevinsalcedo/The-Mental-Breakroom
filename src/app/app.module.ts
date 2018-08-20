import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatFormFieldModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

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
import { BlogPostDetailComponent } from './blog-post-detail/blog-post-detail.component';
import { LocalResourceDetailComponent } from './local-resource-detail/local-resource-detail.component';
import { GeneralResourcesComponent } from './general-resources/general-resources.component';
import { PostFormComponent } from './post-form/post-form.component';

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
    DisorderDetailComponent,
    BlogPostDetailComponent,
    LocalResourceDetailComponent,
    GeneralResourcesComponent,
    PostFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
