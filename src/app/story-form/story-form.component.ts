import { Component } from '@angular/core';
import { Story } from '../story';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-story-form',
  templateUrl: './story-form.component.html',
  styleUrls: ['./story-form.component.css']
})
export class StoryFormComponent {

  model = new Story(1, '', '', Date.now(), '');

  submitted = false;

  constructor(private router: Router, private apiService: ApiService) {}

  onSubmit() {
    this.submitted = true;

    var newStory = {
      title: this.model.topic,
      content: this.model.content,
      author: this.model.author
    }
    this.apiService.createStory(newStory).subscribe((response) => {
      console.log(response);
    });
    this.router.navigateByUrl('/stories');
  }

  newStory() {
    this.model = new Story(42, '', '', Date.now(), '');
  }

  get diagnostic() { return JSON.stringify(this.model); }

}
