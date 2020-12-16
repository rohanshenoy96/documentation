import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@Angular/common/http';

import { AngularDocumentationRoutingModule } from './angular-documentation-routing.module';
import { MaterialModule } from './../material.module';

import { AngularDocumentation } from './angular-documentation.component';
import { TitlePlaceholderComponent, ToolbarComponent, FooterComponent, GettingStartedComponent, BasicConceptsComponent, TerminalComponent, TableComponent } from './index';
import { SidenavAccordionComponent } from './sidenav-accordion/sidenav-accordion.component';

/* Services import */
import { NavigationService } from './services/navigation.service';
import { GetDataService } from './services/get-data.service';



@NgModule({
    declarations: [
        AngularDocumentation,
        TitlePlaceholderComponent,
        ToolbarComponent,
        FooterComponent,
        GettingStartedComponent,
        BasicConceptsComponent,
        SidenavAccordionComponent,
        TerminalComponent,
        TableComponent,
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        MaterialModule,
        AngularDocumentationRoutingModule
    ],
    providers: [
        NavigationService,
        GetDataService
    ],
    exports: []
})
export class AngularDocumentationModule {}