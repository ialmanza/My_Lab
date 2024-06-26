import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PcrFormComponent } from './components/pcr-form/pcr-form.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { CadenaNuevaFormComponent } from './components/cadenas/cadena-nueva-form/cadena-nueva-form.component';




const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: 'pcr-form', component: PcrFormComponent },
  { path: 'nueva-cadena', component: CadenaNuevaFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
export { routes };
