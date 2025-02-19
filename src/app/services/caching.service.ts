import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CachingService {
  constructor(private http: HttpClient) {}

  get(url: string, ttl = 3600): Observable<any | any[]> {
    const nowDate = new Date().getTime();
    const data = localStorage.getItem(url);
    if (data) {
      const dataObj = JSON.parse(data);
      if (dataObj.ttl > nowDate) {
        return of(dataObj.data);
      }
    }
    localStorage.removeItem(url);
    return this.http.get(url).pipe(tap((data) => this.setCache(url, data, ttl)));
  }

  private setCache(url: string, data: any, ttl = 3600) {
    const nowDate = new Date().getTime();
    const cacheExpirationDate = nowDate + ttl * 1000; //Convert seconds to milliseconds
    localStorage.setItem(url, JSON.stringify({ data, ttl: cacheExpirationDate }));
  }
}
