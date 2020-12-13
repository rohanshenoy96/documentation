import { NgModule } from "@angular/core";

import { AngularDocumentationRoutingModule } from './angular-documentation-routing.module';
import { MaterialModule } from './../material.module';

import { AngularDocumentation } from './angular-documentation.component';
import { TitlePlaceholderComponent, ToolbarComponent, FooterComponent } from './index';


@NgModule({
    declarations: [
        AngularDocumentation,
        TitlePlaceholderComponent,
        ToolbarComponent,
        FooterComponent,
    ],
    imports: [
        MaterialModule,
        AngularDocumentationRoutingModule
    ],
    exports: []
})
export class AngularDocumentationModule {}