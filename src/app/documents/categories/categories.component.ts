import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { CategoriesService } from "./categories.service";

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
    categories = [];
    @Output() selectedCategory = new EventEmitter();

    constructor(private _categoriesService: CategoriesService) { }

    ngOnInit() {
        this.categories = this._categoriesService.getCategories();
    }

    onCategorySelection(categoryName) {
        this.categories = this.categories.map((category) => {
            category.isActive = 0;
            if(category.name == categoryName) {
                category.isActive = 1;
            }
            return category;
        })
        this.selectedCategory.emit(categoryName);
    }
}