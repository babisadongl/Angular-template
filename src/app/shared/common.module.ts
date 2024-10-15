import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {NgxMaskModule} from 'ngx-mask';
import {SharedModule} from '.';
import {
  AutocompleteComponent,
  CheckboxComponent,
  ComingSoonComponent,
  FooterComponent,
  FormComponent,
  HeaderComponent,
  InputComponent,
  ModalComponent,
  RadioComponent,
  SelectComponent,
  SidebarComponent,
  ToastrComponent,
  StepperComponent,
  ModalBodyContentComponent,
  FieldWrapperComponent,
} from '../common';

// Select some (bootstrap icons) (use an object, not an array)
import {NgxBootstrapIconsModule} from 'ngx-bootstrap-icons';
import {AppIcons} from '../constants';
const icons = AppIcons;

/**
 * @property declarations : Array //Declares which components, directives, and pipes belong to the module.
 * @property imports : Array //Imports other modules with the components, directives, and pipes that components in the current module need.
 * @property exports : Array //Makes some of those components, directives, and pipes public so that other module's component templates can use them.
 * @property providers : Array //Provides services that other application components can use.
 */
@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ComingSoonComponent,
    ModalComponent,
    ToastrComponent,
    InputComponent,
    SelectComponent,
    CheckboxComponent,
    RadioComponent,
    ModalBodyContentComponent,
    StepperComponent,
    FormComponent,
    AutocompleteComponent,
    FieldWrapperComponent,
  ],
  imports: [
    CommonModule,
    NgxBootstrapIconsModule.pick(icons),
    NgxMaskModule.forRoot(),
    SharedModule,
    RouterModule.forChild([]),
  ],
  exports: [
    NgxBootstrapIconsModule,
    NgxMaskModule,

    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ComingSoonComponent,
    ModalComponent,
    ToastrComponent,
    InputComponent,
    SelectComponent,
    CheckboxComponent,
    RadioComponent,
    ModalBodyContentComponent,
    StepperComponent,
    FormComponent,
    AutocompleteComponent,
    FieldWrapperComponent,
  ],
})
export class SharedCommonModule {}
