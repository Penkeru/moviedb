import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HelperUtils} from '../../utils/helper-utils';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.less']
})
export class SearchBarComponent implements OnInit {
  @Input() debounceTime: number;
  @Input() searchQuery: string;
  @Input() searchPlaceholder: string;
  @Output() searchQueryChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() copyClick: EventEmitter<any> = new EventEmitter<any>();
  private debounceFunc: any;

  constructor() {
    this.debounceTime = 500;
  }

  ngOnInit() {
    this.debounceFunc = HelperUtils.debounce(this.search.bind(this), this.debounceTime);
  }


  public onChange(): void {
    if (this.searchQuery && this.searchQuery.length >= 3) {
      this.debounceFunc();
    }
  }

  public copyState(event: Event): void {
    event.stopPropagation();
    this.copyClick.emit(this.searchQuery);
  }

  public search() {
    this.searchQueryChange.emit(this.searchQuery);
  }


}
