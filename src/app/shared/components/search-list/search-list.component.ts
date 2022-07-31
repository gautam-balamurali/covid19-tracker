import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

/**
 * Search List Component which is a simplified component which is mainly used within a dropdown for searching.
 */
@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss'],
})
export class SearchListComponent implements OnInit {
  @Input() options: string[];
  @Input() label: string;
  @Input() placeholder: string;
  @Output() onOptionChange = new EventEmitter<string>();

  filteredOptions: Observable<string[]>;
  filterControl = new FormControl('');

  constructor() {}

  ngOnInit() {
    this.filteredOptions = this.filterControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
  }

  /**
   * Filters search list component
   * @param value 
   * @returns filter 
   */
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  /**
   * On option change emits value
   * @param value 
   */
  optionChange(value: string) {
    this.onOptionChange.emit(value);
  }
}
