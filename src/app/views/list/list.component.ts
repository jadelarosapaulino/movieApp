import { Component, OnInit } from '@angular/core';
import { Generic } from 'src/app/models/generic';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  movies: Generic = new Generic();
  imgUrl: string = 'https://image.tmdb.org/t/p/w500/';
  p: number = 1;

  constructor( public movieService: MovieService) { }

  ngOnInit(): void {
    this._movieList();
  }

  _movieList() {
    this.movieService._movieList('es-ES', 1).subscribe( res => {
      this.movies = res;
      console.log(res);
    });
  }
}
