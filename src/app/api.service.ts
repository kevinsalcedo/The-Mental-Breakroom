import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_URL = 'http://127.0.0.1:8000';

  constructor(private httpClient: HttpClient) { }

  getDisorders() {
    return this.httpClient.get(`${this.API_URL}/disorders/?format=json`);
  }

  getStories() {
    return this.httpClient.get(`${this.API_URL}/stories/?format=json`);
  }

  getStory(storyId) {
    return this.httpClient.get(`${this.API_URL}/stories/${storyId}`);
  }

  createStory(story) {
    return this.httpClient.post(`${this.API_URL}/stories/`, story);
  }
}
