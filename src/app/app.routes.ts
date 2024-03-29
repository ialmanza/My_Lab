import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PcrFormComponent } from './components/pcr-form/pcr-form.component';
import { CadenaADNComponent } from './components/cadena-adn/cadena-adn.component';
import { PrincipalComponent } from './components/principal/principal.component';




const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: 'pcr-form', component: PcrFormComponent },
  { path: 'cadena-adn', component: CadenaADNComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
export { routes };
