import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularDocumentation } from './angular-documentation.component';
import { TitlePlaceholderComponent } from './index';

const routes: Routes = [
    {
        path: '',
        component: AngularDocumentation,
        children: [
            { path: '', component: TitlePlaceholderComponent}
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AngularDocumentationRoutingModule {

}