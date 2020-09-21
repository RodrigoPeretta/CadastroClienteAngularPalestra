import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './clientes/cadastro/cadastro.component';
import { ListaClientesComponent } from './clientes/lista-clientes/lista-clientes.component';


const routes: Routes = [
  {path: '', redirectTo: 'lista', pathMatch: 'full'},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'lista', component: ListaClientesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
