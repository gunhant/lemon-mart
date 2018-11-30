import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import { ManagerHomeComponent } from './manager-home/manager-home.component';
import { SitemanagerComponent } from './sitemanager.component';

import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [ManagerHomeComponent, SitemanagerComponent],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    MaterialModule
  ]
})
export class ManagerModule { }
