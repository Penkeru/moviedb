import {Component, OnDestroy, OnInit} from '@angular/core';
import {MovieApiService} from './services/movie-api.service';
import {MovieModel} from './models/movie.model';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit, OnDestroy {
  public searchQuery: string;
  public moviesList: MovieModel[];
  public selectedMovie: MovieModel;
  public isLoadingList: boolean;
  public isLoadingMovie: boolean;
  private subscription: Subscription;


  constructor(private movieApiService: MovieApiService, private router: Router) {
    this.searchQuery = '';
    this.moviesList = [];
    this.selectedMovie = null;
    this.subscription = null;
  }

  ngOnInit(): void {
  }

  public searchMovie(searchQuery: string): void {
    this.isLoadingList = true;
    this.movieApiService.searchMovies(searchQuery).subscribe((results) => {
      this.moviesList = results.moviesList;
      this.isLoadingList = false;
    });
  }

  public onMovieSelect(movie: MovieModel): void {
    this.selectMovie(movie);
    this.isLoadingMovie = true;
    this.movieApiService.getMovieCredits(movie.id).subscribe((response) => {
      this.selectedMovie.movieMembers = response;
      debugger;
      this.isLoadingMovie = false;
    });

  }

  private selectMovie(movie: MovieModel): void {
    if (this.selectedMovie) {
      this.selectedMovie.selected = false;
    }
    this.selectedMovie = movie;
  }

  public ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
