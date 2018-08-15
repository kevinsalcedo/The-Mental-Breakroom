import { Component, OnInit } from '@angular/core';
import { Story } from '../story';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-story-form',
  templateUrl: './story-form.component.html',
  styleUrls: ['./story-form.component.css']
})
export class StoryFormComponent implements OnInit {

  model = new Story(1, '', '', Date.now(), 1, '');
  private disorders: Array<object> = [];

  submitted = false;

  constructor(private router: Router, private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getDisorders().subscribe((data: Array<object>) => {
      this.disorders = data;
    });
  }

  onSubmit() {
    this.submitted = true;

    var newStory = {
      title: this.model.topic,
      content: this.model.content,
      author: this.model.author,
      disorder: this.model.disorder
    }
    this.apiService.createStory(newStory).subscribe((response) => {
      console.log(response);
    });
    this.router.navigateByUrl('/stories');
  }

  newStory() {
    this.model = new Story(42, '', '', Date.now(), 1, '');
  }

  get diagnostic() { return JSON.stringify(this.model); }

}
