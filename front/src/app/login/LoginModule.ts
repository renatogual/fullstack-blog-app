import { NgModule } from '@angular/core';
import { LoginComponent } from './LoginComponent';
import { CommonModule } from '@angular/common';
import { CommonMaterialModules } from '../common/material/CommonMaterialModules';
import { RouterModule } from '@angular/router';
import { LoginRoutes } from './LoginRoutes';

@NgModule({
    imports: [
        CommonModule,
        CommonMaterialModules,
        RouterModule.forChild(LoginRoutes)
    ],
    exports: [],
    declarations: [LoginComponent],
    providers: [],
})
export class LoginModule {
}
