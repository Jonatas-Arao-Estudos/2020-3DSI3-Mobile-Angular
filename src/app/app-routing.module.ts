import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ContarRouters } from './contar';

export const rotas = [
  {
    path: 'index',
    pathMatch: 'full',
    redirectTo: '/'
  },
  ...ContarRouters
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(rotas)
  ],
  exports: [
    RouterModule
  ],
  providers: [],
})
export class AppRoutingModule { }
