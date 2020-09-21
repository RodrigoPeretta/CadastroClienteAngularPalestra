import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from './clientes.model';

@Injectable({
    providedIn: 'root'
})
export class ClientesService {
    private url: string = 'http://localhost:3000/clients'

    constructor(private http: HttpClient){
    }

    getClientes(){
        return this.http.get(this.url);
    }

    saveCliente(cliente: Cliente){
        return this.http.post(this.url, cliente);
    }

    deletarCliente(cliente: Cliente) {
        return this.http.delete(`${this.url}/${cliente.id}`);
    }
}