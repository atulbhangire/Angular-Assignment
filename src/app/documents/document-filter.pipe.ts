import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'documentFilter'
})
export class DocumentFilterPipe implements PipeTransform {

  transform(documents: any[], filterText: string): any {
    return documents ? documents.filter((document) => document.name.search(new RegExp(filterText, 'i')) > -1) : [];
  }

}