import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrewService {

  constructor( private http: HttpClient) { }


  getCrew(crew:string):Observable<any> {
    return this.http.get(`${environment.baseURL}/crew/${crew}`)
  }


}

