import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Voiture, VoitureDTO } from '../models/voiture.model';

@Injectable({
  providedIn: 'root'
})
export class VoitureService {


  private readonly _voitureEndPoint: string = `http://localhost:3000/voitures`;

  constructor (private _httpClient: HttpClient) { }

  // CRUD 
  getAll (): Observable<Voiture[]> {
    return this._httpClient.get<Voiture[]>(this._voitureEndPoint);
  }

  getById (id: string): Observable<Voiture> {
    return this._httpClient.get<Voiture>(`${this._voitureEndPoint}/${id}`);
  }

  update (id: string, voiture: Voiture): Observable<Voiture> {
    return this._httpClient.put<Voiture>(`${this._voitureEndPoint}/${id}`, voiture);
  }

  delete (id: string): Observable<void> {
    return this._httpClient.delete<void>(`${this._voitureEndPoint}/${id}`);
  }

  create (voiture: VoitureDTO): Observable<Voiture> {
    return this._httpClient.post<Voiture>(this._voitureEndPoint, voiture);
  }

  patch (id: string, values: Partial<Voiture>): Observable<Voiture> {
    return this._httpClient.patch<Voiture>(`${this._voitureEndPoint}/${id}`, values)
  }

}
