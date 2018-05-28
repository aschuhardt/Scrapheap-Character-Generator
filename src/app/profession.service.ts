import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Profession } from './home/models';

@Injectable({
  providedIn: 'root'
})
export class ProfessionService {
  private url = '/assets/data/professions.json';

  constructor(private http: HttpClient) { }

  public getProfessions(): Observable<Profession[]> {
    return this.http.get<Profession[]>(this.url);
  }
}
