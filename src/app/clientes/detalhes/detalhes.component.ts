import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cliente } from '../clientes.model';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

  @Input() cliente: Cliente;
  @Output() delete: EventEmitter<Cliente> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  deletar(){
    this.delete.emit(this.cliente)
  }

}
