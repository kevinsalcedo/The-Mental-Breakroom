import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  model = new Post(1, '', '', Date.now(), 1, '');
  private disorders:Array<object> = [];

  submitted = false;

  constructor(private router: Router, private apiService: ApiService, private __location: Location)  {}

  ngOnInit() {
    this.apiService.getDisorders().subscribe((data: Array<object>) => {
      this.disorders = data;
    });
  }

  onSubmit() {
    this.submitted = true;

    const newPost = {
      title: this.model.topic,
      content: this.model.content,
      author: this.model.author,
      disorder: this.model.disorder
    };

    this.apiService.createBlogPost(newPost).subscribe((response) => {
      console.log(response);
    this.router.navigateByUrl(`/disorders/${newPost.disorder}`);
    });

  }

  newPost() {
    this.model = new Post(42, '', '', Date.now(), 1, '');
  }

}
