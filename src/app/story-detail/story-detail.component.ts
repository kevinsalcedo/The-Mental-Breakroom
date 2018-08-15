import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-story-detail',
  templateUrl: './story-detail.component.html',
  styleUrls: ['./story-detail.component.css']
})
export class StoryDetailComponent implements OnInit {
  storyId = "hello there";
  private story: object = {};

  constructor(private urlPath: Location, private apiService: ApiService) { }

  ngOnInit() {
    this.storyId = this.urlPath.path().replace('/stories/','');
    this.getStory(this.storyId);
  }

  public getStory(storyId) {
    this.apiService.getStory(this.storyId).subscribe((data: Array<object>) => {
      this.story = data;
    });
  }
}
