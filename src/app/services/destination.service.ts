import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DestinationService {

  constructor(private http: HttpClient) { }

  getPlanet(planet:string):Observable<any> {
    console.log(`adresse envoi requête : ${environment.baseURL}/destination/${planet}`)
    return this.http.get(`${environment.baseURL}/destination/${planet}`)
  }







}
