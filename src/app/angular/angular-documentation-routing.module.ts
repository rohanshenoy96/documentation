import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularDocumentation } from './angular-documentation.component';
import { GettingStartedComponent, BasicConceptsComponent } from './index';

const routes: Routes = [
    {
        path: '',
        component: AngularDocumentation,
        children: [
            { path: 'getting-started', component: GettingStartedComponent},
            { path: 'basic-concepts', component: BasicConceptsComponent}
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AngularDocumentationRoutingModule {

}