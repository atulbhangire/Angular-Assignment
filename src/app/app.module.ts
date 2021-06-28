import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DocumentsComponent } from './documents/documents.component';
import { CategoriesComponent } from './documents/categories/categories.component';
import { SearchDocumentsComponent } from './documents/search-documents/search-documents.component';
import { DocumentFilterPipe } from './documents/document-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DocumentsComponent,
    CategoriesComponent,
    SearchDocumentsComponent,
    DocumentFilterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
