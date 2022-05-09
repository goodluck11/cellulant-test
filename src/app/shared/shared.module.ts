import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzDatePickerModule} from 'ng-zorro-antd/date-picker';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {FormGroupComponent} from './components/form-group/form-group.component';
import {NzSwitchModule} from 'ng-zorro-antd/switch';
import {NzCardModule} from "ng-zorro-antd/card";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzDropDownModule} from "ng-zorro-antd/dropdown";
import {StatusComponent} from './components/status/status.component';
import {NgChartsModule} from "ng2-charts";

const NZ_MODULES = [
  NzIconModule,
  NzDatePickerModule,
  NzSelectModule,
  NzSwitchModule,
  NzCardModule,
  NzButtonModule,
  NzDropDownModule,
  NgChartsModule
]

@NgModule({
  declarations: [
    FormGroupComponent,
    StatusComponent
  ],
  imports: [
    CommonModule,
    ...NZ_MODULES,
  ],
  exports: [
    ...NZ_MODULES,
    FormGroupComponent,
    StatusComponent,
  ]
})
export class SharedModule {
}
