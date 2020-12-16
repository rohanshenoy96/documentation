import { Injectable } from '@angular/core';
import { NavigationModel } from './../models/navigation.model';

@Injectable()
export class NavigationService {
    navigationData: Array<NavigationModel> = [
        { title: 'Setting up the environment', docs: [
            {docTitle: 'Getting Started', route: 'angular/getting-started'},
            {docTitle: 'Basic', route: 'angular/basic-concepts'}
        ]},
        { title: 'Basic Concepts', docs: [
            {docTitle: 'Component',  route: 'angular/components'},
            {docTitle: 'Services',  route: '/services'}
        ]}
    ];

    getNavigationData(): Array<NavigationModel> {
        return this.navigationData;
    }


}