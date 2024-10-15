import {CommonModule, CurrencyPipe, DatePipe} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// MDB Modules
import {MdbAccordionModule} from 'mdb-angular-ui-kit/accordion';
import {MdbCarouselModule} from 'mdb-angular-ui-kit/carousel';
import {MdbCheckboxModule} from 'mdb-angular-ui-kit/checkbox';
import {MdbCollapseModule} from 'mdb-angular-ui-kit/collapse';
import {MdbDropdownModule} from 'mdb-angular-ui-kit/dropdown';
import {MdbFormsModule} from 'mdb-angular-ui-kit/forms';
import {MdbModalModule} from 'mdb-angular-ui-kit/modal';
import {MdbPopoverModule} from 'mdb-angular-ui-kit/popover';
import {MdbRadioModule} from 'mdb-angular-ui-kit/radio';
import {MdbRangeModule} from 'mdb-angular-ui-kit/range';
import {MdbRippleModule} from 'mdb-angular-ui-kit/ripple';
import {MdbScrollspyModule} from 'mdb-angular-ui-kit/scrollspy';
import {MdbTabsModule} from 'mdb-angular-ui-kit/tabs';
import {MdbTooltipModule} from 'mdb-angular-ui-kit/tooltip';
import {MdbValidationModule} from 'mdb-angular-ui-kit/validation';
import {MdbSidenavModule} from 'mdb-angular-ui-kit/sidenav';
import {MdbTableModule} from 'mdb-angular-ui-kit/table';
import {MdbChartModule} from 'mdb-angular-ui-kit/charts';
import {MdbNotificationModule} from 'mdb-angular-ui-kit/notification';
import {MdbSelectModule} from 'mdb-angular-ui-kit/select';
import {MdbStepperModule} from 'mdb-angular-ui-kit/stepper';
import {MdbAutocompleteModule} from 'mdb-angular-ui-kit/autocomplete';

import {MarkAllAsTouchedDirective} from '../directives';
import {FormatPipe} from '../pipes';

/**
 * @property declarations : Array //Declares which components, directives, and pipes belong to the module.
 * @property imports : Array //Imports other modules with the components, directives, and pipes that components in the current module need.
 * @property exports : Array //Makes some of those components, directives, and pipes public so that other module's component templates can use them.
 * @property providers : Array //Provides services that other application components can use.
 */
@NgModule({
  declarations: [MarkAllAsTouchedDirective, FormatPipe],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    MdbSidenavModule,
    MdbTableModule,
    MdbChartModule,
    MdbNotificationModule,
    MdbSelectModule,
    MdbStepperModule,
    MdbAutocompleteModule,
  ],
  exports: [
    MarkAllAsTouchedDirective,
    FormatPipe,

    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    MdbSidenavModule,
    MdbTableModule,
    MdbChartModule,
    MdbNotificationModule,
    MdbSelectModule,
    MdbStepperModule,
    MdbAutocompleteModule,
  ],
  providers: [CurrencyPipe, DatePipe],
})
export class SharedModule {}
