import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { StatCategory } from './home/models';

@Injectable({
  providedIn: 'root'
})
export class StatService {
  private url = '/assets/data/stats.json';

  constructor(private http: HttpClient) { }

  public getStatCategories(): Observable<StatCategory[]> {
    return this.http.get<StatCategory[]>(this.url);
  }
}
