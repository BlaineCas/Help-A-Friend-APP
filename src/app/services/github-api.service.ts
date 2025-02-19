import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GithubApiService {
  readonly githubAPI = 'https://api.github.com';

  constructor(private http: HttpClient) {}

  public getUsers(perPage: number = 10): Observable<any[]> {
    const url = `${this.githubAPI}/users?per_page=${perPage}`;
    return this.http.get<any[]>(url);
  }

  public getUser(username: string): Observable<any> {
    const url = `${this.githubAPI}/users/${username}`;
    return this.http.get<any>(url);
  }

  public getUserRepositories(username: string): Observable<any[]> {
    const url = `${this.githubAPI}/users/${username}/repos`;
    return this.http.get<any[]>(url);
  }
}
