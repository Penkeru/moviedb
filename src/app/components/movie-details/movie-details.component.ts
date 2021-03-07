import {Component, Input, OnInit} from '@angular/core';
import {MovieModel, StaffRoleENUM} from '../../models/movie.model';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.less']
})
export class MovieDetailsComponent implements OnInit {
  @Input() currentMovie: MovieModel;
  roleTypes = StaffRoleENUM;

  constructor() {
  }

  ngOnInit() {
  }

}
