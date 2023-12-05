import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/accueil', pathMatch: 'full' }, // Redirection par défaut vers /accueil
  { path: '**', redirectTo: '/accueil', pathMatch: 'full' }, // Redirection pour les routes inexistantes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
