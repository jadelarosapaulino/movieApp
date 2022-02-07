import { MovieDetail } from './../models/movie-detail';
import { key, lang } from './../../environments/environment';
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
  key = key;
  lang = lang;

  constructor( private http: HttpClient) { }

  _movieList(page: number = 0) : Observable<Generic> {
    return this.http.get<Generic>(this.url.movie.list + lang + '&page=' + page);
  }

  _getDetail( id: number) : Observable<MovieDetail> {
    return this.http.get<MovieDetail>(this.url.movie.detail + id + '?api_key=' + key + '&language=' + lang)
  }
}
