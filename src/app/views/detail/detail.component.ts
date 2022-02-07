import { MovieDetail } from './../../models/movie-detail';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  movie: MovieDetail | undefined;

  paramId: Observable<any>;
  movieId: any = null;

  imgUrl: string = 'https://image.tmdb.org/t/p/w500';

  constructor(private activateRouter: ActivatedRoute, private router: Router, public movieService: MovieService ) {

    this.paramId = this.activateRouter.paramMap.pipe(
      map((params: ParamMap) => params.get("id"))
    );

    this.paramId.subscribe((res) => {
      this.movieId = res;

      if (this.movieId === null || this.movieId === undefined) {
        this.router.navigate(["../"]);
      } else {
        this._getMovieDetail();
      }
    });

   }

  ngOnInit(): void {
  }

  _getMovieDetail() {
    this.movieService._getDetail(this.movieId).subscribe(res => {
      this.movie = res;
      console.log(res);

    });
  }

}
