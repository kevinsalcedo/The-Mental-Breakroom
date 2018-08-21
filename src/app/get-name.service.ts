import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetNameService {
  private currentName:string;

  constructor() { }

  setName(name) {
    this.currentName = name;
  }

  getName() {
    return this.currentName;
  }
}
