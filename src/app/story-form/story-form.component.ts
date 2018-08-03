import { Component } from '@angular/core';
import { Story } from '../story';

@Component({
  selector: 'app-story-form',
  templateUrl: './story-form.component.html',
  styleUrls: ['./story-form.component.css']
})
export class StoryFormComponent {

  model = new Story(1, '', '', Date.now(), '');

  submitted = false;

  onSubmit() { this.submitted = true; }

  newStory() {
    this.model = new Story(42, '', '', Date.now(), '');
  }

  get diagnostic() { return JSON.stringify(this.model); }

}
