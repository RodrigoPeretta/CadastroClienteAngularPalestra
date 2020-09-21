import { Component, OnInit } from '@angular/core';
import { Cliente } from '../clientes.model';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {

  private clientes: Cliente[];
  clienteSelecionado: Cliente;
  
  constructor(private service: ClientesService) { }

  ngOnInit() {
    this.loadClientes();
  }

  selecionarCliente(cliente: Cliente){
    this.clienteSelecionado = cliente;
  }

  deletarCliente(cliente: Cliente){
    this.service.deletarCliente(cliente)
      .subscribe(()=>{

        this.loadClientes();
      })
  }

  loadClientes(){
    this.service.getClientes()
    .subscribe(
      (res) => {
        this.clientes = <Cliente[]>res;
        this.clienteSelecionado = null;
      }
    )
  }

}
