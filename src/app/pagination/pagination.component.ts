import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ICard } from '../models/card.model';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit, OnChanges {

  @Input() cardData: ICard[]  = [];
  @Input() itemsPerPage: number = 2;
  @Output() onPageChange = new EventEmitter<any>();

  totalPages = 0;
  currentPage = 1;
  currentData: ICard[] = [];

  constructor() { }

  ngOnInit() {
    this.calculatePagination();
    this.updatePaginatedData();
  }

  ngOnChanges(): void {
    this.calculatePagination();
    this.updatePaginatedData();
  }

  calculatePagination() {
    this.totalPages = Math.ceil(this.cardData.length / this.itemsPerPage);
  }

  updatePaginatedData() {
    const indexOfLastItem = this.currentPage * this.itemsPerPage;
    const indexOfFirstItem = (this.currentPage - 1) * this.itemsPerPage;
    this.currentData = this.cardData.slice(indexOfFirstItem, indexOfLastItem);

    this.onPageChange.emit(this.currentData);
  }

  handlePageChange(pageNumber: number) {
    if (pageNumber >= 1 && pageNumber <= this.totalPages) {
      this.currentPage = pageNumber;
      this.updatePaginatedData();
    }
  }
}
