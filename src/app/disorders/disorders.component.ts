import { Component, OnInit } from '@angular/core';
import { Disorder } from '../disorder';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-disorders',
  templateUrl: './disorders.component.html',
  styleUrls: ['./disorders.component.css']
})
export class DisordersComponent implements OnInit {

  private disorder_list: Array<object> = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getDisorders();
  }

  public getDisorders() {
    this.apiService.getDisorders().subscribe((data: Array<object>) => {
      this.disorder_list = data;
    });
  }
}
