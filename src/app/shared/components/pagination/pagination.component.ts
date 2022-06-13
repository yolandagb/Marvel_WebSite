import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'cm-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  private _totalPages: number = 1;
  @Input()
  set totalPages(value: number) {
    this._totalPages = value;
    this.generateNumbersPages();
  }
  get totalPages(): number {
    return this._totalPages;
  }

  @Input()
  page: number = 1;
  @Output()
  pageChange: EventEmitter<number> = new EventEmitter<number>();

  numbers: number[] = [1];

  constructor() {}

  ngOnInit(): void {}

  private generateNumbersPages() {
    this.numbers = Array(this.totalPages)
      .fill(0)
      .map((_, i) => i + 1);
  }

  clickPage(page: number) {
    if (page > 0 && page <= this.totalPages) {
      this.page = page;
      this.pageChange.emit(this.page);
    }
  }
}
