import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_URL = 'http://mbdb-env.bwzm9cseur.us-east-1.elasticbeanstalk.com';

  constructor(private httpClient: HttpClient) { }

  getDisorders() {
    return this.httpClient.get(`${this.API_URL}/disorders/?format=json`);
  }

  getDisorder(disorderId) {
    return this.httpClient.get(`${this.API_URL}/disorders/${disorderId}/?format=json`);
  }

  getStories() {
    return this.httpClient.get(`${this.API_URL}/stories/?format=json`);
  }

  getStory(storyId) {
    return this.httpClient.get(`${this.API_URL}/stories/${storyId}/?format=json`);
  }

  createStory(story) {
    return this.httpClient.post(`${this.API_URL}/stories/?format=json`, story);
  }
}
