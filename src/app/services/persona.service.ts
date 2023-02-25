import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {

  // url = 'https://api.chucknorris.io/jokes/random'
  url = '/api/games?category=shooter'
  // url = 'https://jsonplaceholder.typicode.com/todos/1'
  // url = 'http://127.0.0.1/tutoriales/laravel/api/public/api/persona'

  constructor(
    private http:HttpClient
  ) {
    console.log("servicio persona");
  }
  getPersonas(){
    let header = new HttpHeaders()
      .set('Type-content','aplication/json')

    return this.http.get(this.url,{
      headers:header
    })
    }

}
