import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "@global/home/home.component";
import {DashboardComponent} from "@features/dashboard/dashboard.component";
import {TransactionsComponent} from "@features/transactions/transactions.component";

const routes: Routes = [
  {path: '', component: HomeComponent, children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'transactions', component: TransactionsComponent},
      {path: '**', redirectTo: 'dashboard', pathMatch: 'full'},
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
