export interface MovieModel {
  posterUrl: string;
  overview: string;
  releaseDate: string;
  id: number;
  title: string;
  grade: number;
  selected?: boolean;
  movieMembers: any;
}

export interface MoviesQueryResponse {
  currentPage: number;
  totalResults: number;
  totalPages: number;
  moviesList: MovieModel[];
}

export enum StaffRoleENUM {
  ACTORS = 'Acting',
  WRITER = 'Writing',
  PRODUCTION = 'Production',
  DIRECTOR = 'Directing'

}
