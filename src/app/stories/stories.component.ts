import { Component, OnInit } from '@angular/core';
import { Story } from '../story';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {

  story1 = new Story(1, 'On Depression', 'Here is a sample story!', Date.now(), 'Kevin');
  story2 = new Story(2, 'Living With Anxiety', 'Here is another sample story!', Date.now(),  '');
  story3 = new Story(3, 'I Was In A Dark Place', 'Here is a third story!', Date.now(), 'Lydia'); 

  stories = [this.story1, this.story2, this.story3]; 

  constructor() { }

  ngOnInit() {
  }

}
