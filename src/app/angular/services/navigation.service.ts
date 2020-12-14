import { Injectable } from '@angular/core';
import { NavigationModel } from './../models/navigation.model';

@Injectable()
export class NavigationService {
    navigationData: Array<NavigationModel> = [
        { title: 'Getting Started', docs: [
            {docTitle: 'Getting started', route: 'angular/getting-started'},
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