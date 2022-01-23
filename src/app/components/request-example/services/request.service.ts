import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseURL = 'https://rickandmortyapi.com/api/'
const characterURL = baseURL + 'character'
const locationURL = baseURL + 'location'
@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private httpClient: HttpClient) { }

  getCharacters(): Observable<any> {

    return this.httpClient.get(characterURL)
  }


  getLocations(): Observable<any> {
    return this.httpClient.get(locationURL)
  }
}

