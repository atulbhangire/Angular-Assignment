import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor() { }

  getCategories() {
    return [{name: 'All', isActive: 1}, {name: 'Financial', isActive: 0}, {name: 'Technical', isActive: 0}, {name: 'Marketing', isActive: 0}, {name: 'Human resources', isActive: 0}];
  }
}
