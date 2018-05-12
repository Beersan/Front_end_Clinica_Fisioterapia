import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Agenda } from '../../models/model.agenda';



/*
  Generated class for the AgendaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AgendaProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AgendaProvider Provider');
  }

  retornarPaciente(){
    return this.http.get('http://localhost:3000/agenda/listarpaciente').toPromise();
  }

  retornarDia(){
    return this.http.get('http://localhost:3000/agenda/listardia').toPromise();
  }

  retornarHorario(){
    return this.http.get('http://localhost:3000/agenda/listarhorario').toPromise();
  }

  create(agenda: Agenda) {
    console.log(agenda);
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3000/agenda/cadastrar', agenda).subscribe(response => {
        resolve(response);
      });
    });
  }

  retornarAgenda(){
    return this.http.get('http://localhost:3000/agenda/listar').toPromise();
  }

}