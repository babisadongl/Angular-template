import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedCommonModule, SharedModule} from '../shared';
import {LoginComponent} from '../components';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
];

/**
 * @property declarations : Array //Declares which components, directives, and pipes belong to the module.
 * @property imports : Array //Imports other modules with the components, directives, and pipes that components in the current module need.
 * Import only required modules
 * RouterModule.forChild(routes) required for router navigation
 */
@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, SharedModule, SharedCommonModule, RouterModule.forChild(routes)],
})
export class LoginModule {}
