import { Component, OnInit } from "@angular/core";
import { DocumentsService } from './documents.service';

@Component({
    selector: 'app-documents',
    templateUrl: './documents.component.html',
    styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
    documents = [];
    searchText = '';

    constructor(private _documentService: DocumentsService) { }

    ngOnInit() {
        this.documents = this._documentService.getDocuments();
    }

    getSelectedCategory(categoryName) {
        let documents = this._documentService.getDocuments();
        if(categoryName != 'All') {
            this.documents = documents.filter((category) => {
                return categoryName == category.category;
            })
        } else {
            this.documents = documents;
        }
    }

    onDocumentSearch(searchText) {
        this.searchText = searchText;
    }
}