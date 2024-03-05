import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Logistics } from 'app/logistics/logistics';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LogisticsService {

  constructor(private http: HttpClient) { }

  addLogistics(logistics: Logistics ,eventId:number) {
    const params = new HttpParams().set('eventId', eventId);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<Logistics>(environment.url + '/DevDream/Logistics/add', logistics, { headers, params});
  }

  updateLogistics(id: number, logistics: Logistics) {
    console.log(id)
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const url = `${environment.url}/DevDream/Logistics/update/${id}`;
    return this.http.put<Logistics>(url, logistics, { headers });
    }
}
