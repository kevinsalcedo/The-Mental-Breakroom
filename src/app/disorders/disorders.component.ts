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
  private disorder_grid = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getDisorders();

    for (let i = 0; i < this.disorder_list.length; i += 4) {
     this.disorder_grid[this.disorder_grid.length] = this.disorder_list.slice(i, i + 4);
    }
  }

  public getDisorders() {
    this.apiService.getDisorders().subscribe((data: Array<object>) => {
      this.disorder_list = data;

      for (let i = 0; i < data.length; i += 4) {
        this.disorder_grid[this.disorder_grid.length] = data.slice(i, i + 4);
      }
    });
  }
}
