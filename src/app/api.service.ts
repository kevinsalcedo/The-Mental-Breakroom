import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  LOCAL_URL = 'http://localhost:8000';
  API_URL = 'http://mbdb-env.bwzm9cseur.us-east-1.elasticbeanstalk.com';
  URL = this.API_URL;

  constructor(private httpClient: HttpClient) { }

  getDisorders() {
    return this.httpClient.get(`${this.URL}/disorders/?format=json`);
  }

  getDisorder(disorderId) {
    return this.httpClient.get(`${this.URL}/disorders/${disorderId}/?format=json`);
  }

  getStories() {
    return this.httpClient.get(`${this.URL}/stories/?format=json`);
  }

  getStory(storyId) {
    return this.httpClient.get(`${this.URL}/stories/${storyId}/?format=json`);
  }

  createStory(story) {
    return this.httpClient.post(`${this.URL}/stories/?format=json`, story);
  }
}
