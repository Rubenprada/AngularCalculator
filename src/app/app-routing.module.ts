import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'vist',
    pathMatch: 'full'
  },
  {
    path: 'vist',
    loadChildren: () => import('./pages/calculator-vist/calculator-vist.module').then(m=>m.CalculatorVistModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
