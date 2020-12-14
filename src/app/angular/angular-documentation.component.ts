import { NavigationService } from './services/navigation.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-angular-documentation',
    templateUrl: './angular-documentation.component.html',
    styleUrls: ['./angular-documentation.component.scss']
})
export class AngularDocumentation implements OnInit{
    
    navigationData: any;
    constructor(private navigationService: NavigationService){
    }

    ngOnInit() {
        this.navigationData = this.navigationService.getNavigationData();
    }
}