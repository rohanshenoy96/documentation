import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { AngularDocumentationRoutingModule } from './angular-documentation-routing.module';
import { MaterialModule } from './../material.module';

import { AngularDocumentation } from './angular-documentation.component';
import { TitlePlaceholderComponent, ToolbarComponent, FooterComponent, GettingStartedComponent, BasicConceptsComponent } from './index';
import { SidenavAccordionComponent } from './sidenav-accordion/sidenav-accordion.component';
import { NavigationService } from './services/navigation.service';


@NgModule({
    declarations: [
        AngularDocumentation,
        TitlePlaceholderComponent,
        ToolbarComponent,
        FooterComponent,
        GettingStartedComponent,
        BasicConceptsComponent,
        SidenavAccordionComponent,
    ],
    imports: [
        CommonModule,
        MaterialModule,
        AngularDocumentationRoutingModule
    ],
    providers: [
        NavigationService
    ],
    exports: []
})
export class AngularDocumentationModule {}