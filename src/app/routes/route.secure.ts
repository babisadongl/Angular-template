import {Routes} from '@angular/router';

/**
 * @description
 * loadChildren //An object specifying lazy-loaded child routes.
 * import //Import specific required module and not from index.ts
 */
export const RouteSecure: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('../modules/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: 'forms',
    loadChildren: () => import('../modules/forms.module').then(m => m.FormsModule),
  },
  {
    path: 'login',
    loadChildren: () => import('../modules/login.module').then(m => m.LoginModule),
  },
  {
    path: 'login2',
    loadChildren: () => import('../modules/login2.module').then(m => m.Login2Module),
  },
  {
    path: 'sample',
    loadChildren: () => import('../modules/sample.module').then(m => m.SampleModule),
  },
];
