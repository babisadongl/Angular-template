import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

/**
 * @description
 * loadChildren //An object specifying lazy-loaded child routes.
 * import //Import specific required module and not from index.ts
 */
const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/dashboard'},
  {
    path: '',
    loadChildren: () => import('./modules/layout-login.module').then(m => m.LayoutLoginModule),
  },
  {
    path: '',
    loadChildren: () => import('./modules/layout-main.module').then(m => m.LayoutMainModule),
  },
  {path: '**', redirectTo: '/login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
