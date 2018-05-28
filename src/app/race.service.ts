import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Race } from './home/models';

@Injectable({
  providedIn: 'root'
})
export class RaceService {
  private url = '/assets/data/races.json';

  constructor(private http: HttpClient) { }

  public getRaces(): Observable<Race[]> {
    return this.http.get<Race[]>(this.url);
  }
}
