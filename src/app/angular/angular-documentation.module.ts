import { NgModule } from "@angular/core";

import { AngularDocumentationRoutingModule } from './angular-documentation-routing.module';
import { MaterialModule } from './../material.module';

import { AngularDocumentation } from './angular-documentation.component';
import { TitlePlaceholderComponent, ToolbarComponent, FooterComponent } from './index';
import { GettingStartedComponent } from './documents/getting-started/getting-started.component';
import { BasicConceptsComponent } from './documents/basic-concepts/basic-concepts.component';


@NgModule({
    declarations: [
        AngularDocumentation,
        TitlePlaceholderComponent,
        ToolbarComponent,
        FooterComponent,
        GettingStartedComponent,
        BasicConceptsComponent,
    ],
    imports: [
        MaterialModule,
        AngularDocumentationRoutingModule
    ],
    exports: []
})
export class AngularDocumentationModule {}