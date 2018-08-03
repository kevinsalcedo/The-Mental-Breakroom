import { Component, OnInit } from '@angular/core';
import { Disorder } from '../disorder';

@Component({
  selector: 'app-disorders',
  templateUrl: './disorders.component.html',
  styleUrls: ['./disorders.component.css']
})
export class DisordersComponent implements OnInit {

  disorders = [
    [new Disorder(1, 'Unipolar Depression'),
     new Disorder(2, 'Bipolar Depression'),
     new Disorder(3, 'Generalized Anxiety'),
      new Disorder(4, 'Schizophrenia')
    ],
    [new Disorder(5, 'Post Traumatic Stress Disroder'),
     new Disorder(6, 'Attention Deficit/Hyperactivity Disorder'),
     new Disorder(7, 'Panic Disorder'),
     new Disorder(8, 'Anorexia')
    ]
  ];

  constructor() { }

  ngOnInit() {
  }

}
