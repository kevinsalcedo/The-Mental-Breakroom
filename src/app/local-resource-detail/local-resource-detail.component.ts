import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-local-resource-detail',
  templateUrl: './local-resource-detail.component.html',
  styleUrls: ['./local-resource-detail.component.css']
})
export class LocalResourceDetailComponent implements OnInit {
  resourceId = '-1';
  disorderId = '-1';
  private resource: object = {};
  private disorder: object = {};

  constructor(private urlPath: Location, private apiService:ApiService) { }

  ngOnInit() {
    this.resourceId = this.urlPath.path().replace('/localresources/','');
    this.getLocalResource(this.resourceId);
  }

  public getLocalResource(resourceId) {
    this.apiService.getLocalResource(this.resourceId).subscribe((resourceData: Array<object>) => {
      this.resource = resourceData;
      this.disorderId = resourceData['disorder']
      this.getDisorder(this.disorderId);
    });
  }

  public getDisorder(disorderId) {
    this.apiService.getDisorder(this.disorderId).subscribe((data: Array<object>) => {
      this.disorder = data;
    });
  }
}
