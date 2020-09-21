import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './material/material.module';
import { CadastroComponent } from './clientes/cadastro/cadastro.component';
import { FormsModule } from '@angular/forms';
import { ListaClientesComponent } from './clientes/lista-clientes/lista-clientes.component';
import { HttpClientModule } from '@angular/common/http';
import { ClientesService } from './clientes/clientes.service';
import { DetalhesComponent } from './clientes/detalhes/detalhes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CadastroComponent,
    ListaClientesComponent,
    DetalhesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
