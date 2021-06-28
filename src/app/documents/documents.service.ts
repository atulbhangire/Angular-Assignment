import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class DocumentsService {
    constructor() {}

    getDocuments() {
        return [{name: 'Terminal Instructables', category: 'Technical'}, {name: 'Installation Guides', category: 'Technical'}, {name: 'Career Opportunities', category: 'Human resources'}, {name: 'Customer Onboarding', category: 'Financial'}, {name: 'Outlet Branding', category: 'Marketing'}, {name: 'Accounting Procedures', category: 'Financial'}, {name: 'Training', category: 'Human resources'}, {name: 'Printing Guidance', category: 'Marketing'}, {name: 'Technical Support', category: 'Technical'}];
    }
}