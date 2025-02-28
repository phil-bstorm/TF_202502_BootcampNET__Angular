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

  getById (id: number): Observable<Voiture> {
    return this._httpClient.get<Voiture>(`${this._voitureEndPoint}/${id}`);
  }

  update (id: number, voiture: Voiture): Observable<Voiture> {
    return this._httpClient.put<Voiture>(`${this._voitureEndPoint}/${id}`, voiture);
  }

  delete (id: number): Observable<void> {
    return this._httpClient.delete<void>(`${this._voitureEndPoint}/${id}`)
  }

  create (voiture: VoitureDTO): Observable<void> {
    return this._httpClient.post<void>(this._voitureEndPoint, voiture)
  }
}
