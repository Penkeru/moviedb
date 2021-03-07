import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MovieModel} from '../../models/movie.model';

@Component({
  selector: 'app-movie-thumbnail',
  templateUrl: './movie-thumbnail.component.html',
  styleUrls: ['./movie-thumbnail.component.less']
})
export class MovieThumbnailComponent implements OnInit {
  @Input() movie: MovieModel;
  @Output() selectMovie: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }


  public onThumbClick(): void {
    this.movie.selected = true;
    this.selectMovie.emit(this.movie);
  }

}
