import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviedbApiServiceService {
  public readonly apiKey = '468c3155e3e041a97a5b2569eeadd879';

  constructor(private http: HttpClient) {
  }


  public searchMovies(query: string, page = 1): Observable<any> {
    return this.http.get('https://api.themoviedb.org/3/search/movie', {params: {api_key: this.apiKey, query, page: page.toString()}});
  }

  public getMovieCreadits(movieId: number) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${movieId}/credits`);
  }
}
