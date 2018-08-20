import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  LOCAL_URL = 'http://localhost:8000';
  API_URL = 'http://mbdb-env.bwzm9cseur.us-east-1.elasticbeanstalk.com';
  YELP_URL = 'https://api.yelp.com/v3/businesses/search';
  YELP_API_KEY = 'u4ws1iTSg2SRPl6AAPW99HcS9cXvsXM0Rt3NffZbrc141GhVfxB57q4hQZBvDL154SAhmclq1V6Z5_qFQ0SI1X9CXkKAhO8Rh8ncz_xMMVtOmxyfkJ6o9kW5DrJ5W3Yx';
  URL = this.LOCAL_URL;

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

  getStoriesFiltered(disorderId) {
    return this.httpClient.get(`${this.URL}/stories/?disorder=${disorderId}/?format=json`);
  }

  getStory(storyId) {
    return this.httpClient.get(`${this.URL}/stories/${storyId}/?format=json`);
  }

  createStory(story) {
    return this.httpClient.post(`${this.URL}/stories/?format=json`, story);
  }

  getBlogPosts() {
    return this.httpClient.get(`${this.URL}/blogposts/?format=json`);
  }

  getBlogPost(blogPostId) {
    return this.httpClient.get(`${this.URL}/blogposts/${blogPostId}/?format=json`);
  }

  createBlogPost(blogPost) {
    return this.httpClient.post(`${this.URL}/blogposts/?format=json`, blogPost);
  } 

  getLocalResources() {
    return this.httpClient.get(`${this.URL}/localresources/?format=json`);
  }

  getLocalResource(localResourceId) {
    return this.httpClient.get(`${this.URL}/localresources/${localResourceId}/?format=json`);
  } 
}
