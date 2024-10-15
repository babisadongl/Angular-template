import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SharedCommonModule, SharedModule} from '../shared';
import {RouterModule, Routes} from '@angular/router';
import {
  FormsComponent,
  CheckboxFormComponent,
  RadioFormComponent,
  SelectFormComponent,
  InputFormComponent,
  FormDemoComponent,
  AutocompleteFormComponent,
} from '../components';
import {DynamicFormComponent} from '../common/form/dynamic-form/dynamic-form.component';

const routes: Routes = [
  {
    path: '',
    component: FormsComponent,
    children: [
      {path: 'autocomplete', component: AutocompleteFormComponent},
      {path: 'checkbox', component: CheckboxFormComponent},
      {path: 'form', component: FormDemoComponent},
      {path: 'input', component: InputFormComponent},
      {path: 'radio', component: RadioFormComponent},
      {path: 'select', component: SelectFormComponent},
    ],
  },
];

/**
 * @property declarations : Array //Declares which components, directives, and pipes belong to the module.
 * @property imports : Array //Imports other modules with the components, directives, and pipes that components in the current module need.
 * Import only required modules
 * RouterModule.forChild(routes) required for router navigation
 */
@NgModule({
  declarations: [
    FormsComponent,
    InputFormComponent,
    SelectFormComponent,
    CheckboxFormComponent,
    RadioFormComponent,
    FormDemoComponent,
    DynamicFormComponent,
    AutocompleteFormComponent,
  ],
  imports: [CommonModule, SharedModule, SharedCommonModule, RouterModule.forChild(routes)],
})
export class FormsModule {}
