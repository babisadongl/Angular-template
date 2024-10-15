import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedCommonModule, SharedModule} from '../shared';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from '../components';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
];

/**
 * @property declarations : Array //Declares which components, directives, and pipes belong to the module.
 * @property imports : Array //Imports other modules with the components, directives, and pipes that components in the current module need.
 * Import only required modules
 * RouterModule.forChild(routes) required for router navigation
 */
@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, SharedModule, SharedCommonModule, RouterModule.forChild(routes)],
})
export class DashboardModule {}
