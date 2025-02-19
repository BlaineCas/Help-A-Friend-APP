import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CachingService } from './caching.service';

@Injectable({
  providedIn: 'root',
})
export class GithubApiService {
  readonly githubAPI = 'https://api.github.com';
  static CACHE_TTL = 7200;

  constructor(private cachingService: CachingService) {}
  public getUsers(since: number = 1, perPage: number = 10): Observable<any[]> {
    const url = `${this.githubAPI}/users?&per_page=${perPage}&since=${since}`;
    return this.cachingService.get(url, GithubApiService.CACHE_TTL);
  }

  public getUser(username: string): Observable<any> {
    const url = `${this.githubAPI}/users/${username}`;
    return this.cachingService.get(url, GithubApiService.CACHE_TTL);
  }

  public getUserRepositories(username: string): Observable<any[]> {
    const url = `${this.githubAPI}/users/${username}/repos`;
    return this.cachingService.get(url, GithubApiService.CACHE_TTL);
  }
}
