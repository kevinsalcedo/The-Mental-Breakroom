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
import { BlogPostDetailComponent } from './blog-post-detail/blog-post-detail.component';
import { LocalResourceDetailComponent } from './local-resource-detail/local-resource-detail.component';
import { GeneralResourcesComponent } from './general-resources/general-resources.component';
import { PostFormComponent } from './post-form/post-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blank', component: BlankComponent },
  { path: 'newStory', component: StoryFormComponent },
  { path: 'stories', component: StoriesComponent },
  { path: 'stories/:id', component: StoryDetailComponent},
  { path: 'disorders', component: DisordersComponent },
  { path: 'disorders/:id', component: DisorderDetailComponent },
  { path: 'blogposts/:id', component: BlogPostDetailComponent },
  { path: 'localresources/:id', component: LocalResourceDetailComponent },
  { path: 'resources', component: GeneralResourcesComponent },
  { path: 'newPost', component: PostFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule ]
})

export class AppRoutingModule { }
