import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-disorder-detail',
  templateUrl: './disorder-detail.component.html',
  styleUrls: ['./disorder-detail.component.css']
})

export class DisorderDetailComponent implements OnInit {
  disorderId = '-1';
  private disorder: object = {};
  private posts: Array<object> = [];
  private resources: Array<object> = [];

  constructor(private urlPath: Location, private apiService: ApiService) { }

  ngOnInit() {
    this.disorderId = this.urlPath.path().replace('/disorders/', '');
    this.getDisorder(this.disorderId);
    this.getBlogPosts();
    console.log(this.disorderId);
    this.getLocalResources();
    console.log(this.resources);
  }

  public getDisorder(disorderId) {
    this.apiService.getDisorder(this.disorderId).subscribe((data: Array<object>) => {
      this.disorder = data;
    });
  }

  public getBlogPosts() {
    this.apiService.getBlogPosts().subscribe((postList: Array<object>) => {
      this.posts = postList.filter(post => post['disorder'] === this.disorderId);
    });
  }

  public getLocalResources() {
    this.apiService.getLocalResources().subscribe((resourceList: Array<object>) => {
      this.resources = resourceList.filter(resource => resource['disorder'] === this.disorderId);
    });
  }

}
