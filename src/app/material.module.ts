import { NgModule } from '@angular/core';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTreeModule } from '@angular/material/tree';

@NgModule({
    exports: [
        MatSidenavModule,
        MatTreeModule,
    ],
})
export class MaterialModule {

}