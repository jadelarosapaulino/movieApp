import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Generic } from '../models/generic';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  url = environment.urlsApi;
  constructor( private http: HttpClient) { }

  _movieList(lang: string = 'es-ES', page: number = 0) : Observable<Generic> {
    return this.http.get<Generic>(this.url.movie.list + lang + '&page=' + page);
  }
}
