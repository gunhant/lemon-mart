import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagerHomeComponent } from './manager-home/manager-home.component';
import { SitemanagerComponent } from './sitemanager.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { ReceiptLookupComponent } from './receipt-lookup/receipt-lookup.component';

/*
const routes: Routes = [
    { path: '', redirectTo: '/manager/home', pathMatch: 'full' },
    { path: 'home', component: ManagerHomeComponent }
];
*/
const routes: Routes = [
  {
    path: '', component: SitemanagerComponent, children: [
      { path: '', redirectTo: 'manager/home', pathMatch: 'full' },
      { path: 'home', component: ManagerHomeComponent },
      { path: 'users', component: UserManagementComponent },
      { path: 'receipts', component: ReceiptLookupComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
