import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-story-detail',
  templateUrl: './story-detail.component.html',
  styleUrls: ['./story-detail.component.css']
})
export class StoryDetailComponent implements OnInit {
  storyId = "-1";
  disorderId = "-1";
  private story: object = {};
  private disorder: object = {};

  constructor(private urlPath: Location, private apiService: ApiService) { }

  ngOnInit() {
    this.storyId = this.urlPath.path().replace('/stories/','');
    this.getStory(this.storyId);
  }

  public getStory(storyId) {
    this.apiService.getStory(this.storyId).subscribe((data: Array<object>) => {
      this.story = data;
      //      this.disorderId = data.disorder;
      //console.log(this.story.disorder);
      //this.getDisorder(this.disorderId);
    });
  }

  public getDisorder(disorderId) {
    this.apiService.getDisorder(this.disorderId).subscribe((data: Array<object>) => {
      this.disorder = data;
    });
  }
}
