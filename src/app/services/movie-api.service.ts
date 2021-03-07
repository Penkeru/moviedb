import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {MoviesQueryResponse} from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

  constructor(private http: HttpClient) {
  }


  public searchMovies(query: string, page = 1): Observable<MoviesQueryResponse> {
    return this.http.get('https://api.themoviedb.org/3/search/movie', {params: {query, page: page.toString()}})
      .pipe(map((response: any) => {
          return {
            currentPage: response.page,
            totalResults: response.total_results,
            totalPages: response.total_pages,
            moviesList: response.results.map((movie) => {
              return {
                posterUrl: movie.poster_path ? movie.poster_path : '',
                overview: movie.overview,
                releaseDate: movie.release_date ? new Date(movie.release_date) : '',
                id: movie.id,
                title: movie.title,
                grade: movie.vote_average
              };
            })
          };
        }
      ));
  }

  public getMovieCredits(movieId: number) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${movieId}/credits`);
  }
}
