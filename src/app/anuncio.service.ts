import { Anuncio } from './anuncio';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnuncioService {

  constructor(private http: HttpClient) { }

  getAnuncio(): Observable<Anuncio[]> {
      let url = "http://localhost:3004/anuncios";
      return this.http.get<Anuncio[]>(url);
  }
}
