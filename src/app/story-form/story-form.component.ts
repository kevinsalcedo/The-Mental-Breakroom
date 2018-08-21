import { Component, OnInit } from '@angular/core';
import { Story } from '../story';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { GetNameService } from '../get-name.service';

@Component({
  selector: 'app-story-form',
  templateUrl: './story-form.component.html',
  styleUrls: ['./story-form.component.css']
})
export class StoryFormComponent implements OnInit {

  model = new Story(1, '', '', Date.now(), 1, '');
  private disorders: Array<object> = [];

  submitted = false;

  constructor(private nameService: GetNameService, private router: Router, private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getDisorders().subscribe((data: Array<object>) => {
      this.disorders = data;
    });

    const savedName = this.nameService.getName();
    if (savedName) {
      this.model.author = savedName;
    }
  }

  onSubmit() {
    this.submitted = true;

    const newStory = {
      title: this.model.topic,
      content: this.model.content,
      author: this.model.author,
      disorder: this.model.disorder
    };

    if (this.model.author !== '') {
      this.nameService.setName(this.model.author);
    }

    this.apiService.createStory(newStory).subscribe((response) => {
      this.router.navigateByUrl(`/stories`);
    });

  }

  newStory() {
    this.model = new Story(42, '', '', Date.now(), 1, '');
  }

  get diagnostic() { return JSON.stringify(this.model); }

}
