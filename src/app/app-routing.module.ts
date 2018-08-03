import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { BlankComponent } from './blank/blank.component';
import { StoryFormComponent } from './story-form/story-form.component';
import { StoriesComponent } from './stories/stories.component';
import { StoryDetailComponent } from './story-detail/story-detail.component';
import { DisordersComponent } from './disorders/disorders.component';
import { DisorderDetailComponent } from './disorder-detail/disorder-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blank', component: BlankComponent },
  { path: 'newStory', component: StoryFormComponent },
  { path: 'stories', component: StoriesComponent },
  { path: 'story/:id', component: StoryDetailComponent},
  { path: 'disorders', component: DisordersComponent },
  { path: 'disorder/:id', component: DisorderDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule ]
})

export class AppRoutingModule { }
