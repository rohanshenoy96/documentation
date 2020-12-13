import { Injectable } from '@angular/core';
import { NavigationModel } from './../models/navigation.model';

@Injectable()
export class NavigationService {
    navigationData: Array<NavigationModel> = [
        { title: 'Getting Started', route: '/getting-started' },
        { title: 'Basic Concepts', route: '/basic-concepts' }
    ];

    getNavigationData(): Array<NavigationModel> {
        return this.navigationData;
    }


}