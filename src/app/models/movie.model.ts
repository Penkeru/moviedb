export interface MovieModel {
  posterUrl: string;
  overview: string;
  releaseDate: string;
  id: number;
  title: string;
  grade: number;
  selected?: boolean;
}

export interface MoviesQueryResponse {
  currentPage: number;
  totalResults: number;
  totalPages: number;
  moviesList: MovieModel[];
}
