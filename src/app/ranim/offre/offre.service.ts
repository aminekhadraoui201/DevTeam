import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Offre } from './offre.module';

@Injectable({
  providedIn: 'root'
})
export class OffreService {


  private apiURL = 'http://localhost:9100/DevDream/offre';
  offreService: any;

  constructor(private http: HttpClient) { }

  getOffres(): Observable<any> {
    return this.http.get<Offre[]>(`${this.apiURL}/retrieve-all-offres`);
  }

  retrieveOffre(id_offre: number): Observable<any> {
    return this.http.get<any>(`${this.apiURL}/retrieve-offre/${id_offre}`);
  }

  addOffre(offre: any): Observable<any> {

    return this.http.post(this.apiURL+"/add-offre", offre);
  }

  removeOffre(id_offre: number): Observable<any> {
    return this.http.delete(`${this.apiURL}/remove-offre/${id_offre}`);
  }

  modifyOffre(id_offre: number, offre: Offre): Observable<Offre> {
    return this.http.put<Offre>(`${this.apiURL}/modify-offre/${id_offre}`, offre);
  }
  searchOffers(keywords: string): Observable<Offre[]> {
    // Appel à l'API pour rechercher des offres en fonction du mot-clé
    return this.http.get<Offre[]>(`${this.apiURL}/search/${keywords}`);
  }
  ///getEtudiantsparoffre(id_offre: number): Observable<User[]>{
 //   const url = `${this.apiURL}/getEtudiant/${id_offre}`;
 //   return this.http.get<User[]>(url);
 // }
  
  }

