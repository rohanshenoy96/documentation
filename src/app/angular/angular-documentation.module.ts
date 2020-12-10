import { AngularDocumentation } from './angular-documentation.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";

import { AngularDocumentationRoutingModule } from './angular-documentation-routing.module';
import { TitlePlaceholderComponent, ToolbarComponent, FooterComponent } from './index';


@NgModule({
    declarations: [
        AngularDocumentation,
        TitlePlaceholderComponent,
        ToolbarComponent,
        FooterComponent,
    ],
    imports: [
        AngularDocumentationRoutingModule
    ],
    exports: []
})
export class AngularDocumentationModule {}