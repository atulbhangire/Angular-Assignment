import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-documents',
  templateUrl: './search-documents.component.html',
  styleUrls: ['./search-documents.component.css']
})
export class SearchDocumentsComponent implements OnInit {
  @Output() documentSearch = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSearchDocument(searchText) {
    this.documentSearch.emit(searchText);
  }

}
