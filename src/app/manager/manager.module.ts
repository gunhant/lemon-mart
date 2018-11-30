import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import { ManagerHomeComponent } from './manager-home/manager-home.component';
import { SitemanagerComponent } from './sitemanager.component';

import { MaterialModule } from '../material.module';
import { UserManagementComponent } from './user-management/user-management.component';
import { ReceiptLookupComponent } from './receipt-lookup/receipt-lookup.component';

@NgModule({
  declarations: [ManagerHomeComponent, SitemanagerComponent, UserManagementComponent, ReceiptLookupComponent],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    MaterialModule
  ]
})
export class ManagerModule { }
