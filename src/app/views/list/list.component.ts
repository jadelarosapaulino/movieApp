import { movie } from './../../models/movie';
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
  mlist: movie[] = [];
  imgUrl: string = 'https://image.tmdb.org/t/p/w500';
  p: number = 1;

  constructor( public movieService: MovieService) { }

  ngOnInit(): void {
    this._movieList();
  }

  _movieList() {
    this.movieService._movieList(this.p).subscribe( res => {
      this.movies = res;
      this.mlist = this.movies.results;
      console.log(res);
    });
  }

  pageChange(event: any) {
    this.p = Number(event);
    this._movieList();
  }
}
