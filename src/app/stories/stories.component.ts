import { Component, OnInit } from '@angular/core';
import { Story } from '../story';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {

  private stories: Array<object> = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getStories();
  }

  public getStories() {
    this.apiService.getStories().subscribe((data: Array<object>) => {
      this.stories = data;
    });
  }
}
