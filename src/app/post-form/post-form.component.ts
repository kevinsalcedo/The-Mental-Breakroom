import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { GetNameService } from '../get-name.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  model = new Post(1, '', '', Date.now(), 1, '');
  private disorders: Array<object> = [];

  submitted = false;

  constructor(private nameService: GetNameService, private router: Router, private apiService: ApiService, private __location: Location)  {}

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

    const newPost = {
      title: this.model.topic,
      content: this.model.content,
      author: this.model.author,
      disorder: this.model.disorder
    };

    if (this.model.author !== '') {
      this.nameService.setName(this.model.author);
    }

    this.apiService.createBlogPost(newPost).subscribe((response) => {
      console.log(response);
    this.router.navigateByUrl(`/disorders/${newPost.disorder}`);
    });

  }

  newPost() {
    this.model = new Post(42, '', '', Date.now(), 1, '');
  }

}
