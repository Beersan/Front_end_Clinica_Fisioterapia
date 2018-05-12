import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Professor } from '../../models/model.cadastrar-professor';

@Injectable()
export class AgendaProfessorProvider {

  constructor(public http: HttpClient) {}
  
  gravarProfessor(professor) {
    var rota = "cadastrar";
    if (professor.idProfessor != ""){
      rota = "editar";
    } 
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3000/professor/' + rota, professor).subscribe(response => {
        resolve(response);
      });
    });
  }

  retornarProfessor(){  
    return this.http.get('http://localhost:3000/professor/listar').toPromise();
  }

  excluirProfessor(idProfessor){
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3000/professor/excluir', idProfessor).subscribe(response => {
        resolve(response);
      });
    });
  }

  listarProfessor(){    
    return this.http.get('http://localhost:3000/agendaProfessor/listarProfessor').toPromise();
  }
}