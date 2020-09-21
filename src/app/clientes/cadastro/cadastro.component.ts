import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../clientes.model';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  nome: string;
  email: string;

  constructor(private service: ClientesService, 
    private router: Router) { }

  ngOnInit() {
  }

  click(){
    let cliente: Cliente = {
      id: Math.random(),
      nome: this.nome,
      email: this.email,
    }

    this.service.saveCliente(cliente)
      .subscribe(()=>{
        this.router.navigate(['lista']);
      })
  }

}
