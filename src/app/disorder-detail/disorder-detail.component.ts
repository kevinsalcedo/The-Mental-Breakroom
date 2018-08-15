import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-disorder-detail',
  templateUrl: './disorder-detail.component.html',
  styleUrls: ['./disorder-detail.component.css']
})
export class DisorderDetailComponent implements OnInit {
  disorderId = "-1";
  private disorder: object = {};

  constructor(private urlPath: Location, private apiService: ApiService) { }

  ngOnInit() {
    this.disorderId = this.urlPath.path().replace('/disorders/','');
    this.getDisorder(this.disorderId);
  }

  public getDisorder(disorderId) {
    this.apiService.getDisorder(this.disorderId).subscribe((data: Array<object>) => {
      this.disorder = data;
    });
  }
}
