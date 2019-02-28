import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClaimsComponent } from './UI/claims/claims.component';


const routes: Routes = [
  { path: 'RegisterClaim', component: ClaimsComponent },
{ path : '', component : ClaimsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
