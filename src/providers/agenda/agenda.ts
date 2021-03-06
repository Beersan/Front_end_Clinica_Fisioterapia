import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Agenda } from '../../models/model.agenda';

@Injectable()
export class AgendaProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AgendaProvider Provider');
  }

  retornarprofessor(paciente){
    return new Promise((resolve, reject) => {
      this.http.post('https://backfisio.herokuapp.com/agenda/listarprofessor', paciente).subscribe(response => {
        resolve(response);
      });
    });
  }
  
  retornarPaciente(){
    return this.http.get('https://backfisio.herokuapp.com/agenda/listarpaciente').toPromise();
  }
  
  retornarDia(idprofessor){
    return new Promise((resolve, reject) => {
      this.http.post('https://backfisio.herokuapp.com/agenda/listardia', idprofessor).subscribe(response => {
        resolve(response);
      });
    });
  }
  
  retornarHorario(dados){
    return new Promise((resolve, reject) => {
      this.http.post('https://backfisio.herokuapp.com/agenda/listarhorario', dados).subscribe(response => {        
        resolve(response);
      });
    });
  }

  create(agenda: Agenda) {
    console.log(agenda);
    return new Promise((resolve, reject) => {
      this.http.post('https://backfisio.herokuapp.com/agenda/cadastrar', agenda).subscribe(response => {
        resolve(response);
      });
    });
  }

  retornarAgenda(){
    return this.http.get('https://backfisio.herokuapp.com/agenda/listar').toPromise();
  }

  buscarSessoes(idagenda){
    return new Promise((resolve, reject) => {
      this.http.post('https://backfisio.herokuapp.com/agenda/buscarsessoes', idagenda).subscribe(response => {        
        resolve(response);
      });
    });
  }

  gravarAssinatura(dados) {
    return new Promise((resolve, reject) => {
      this.http.post('https://backfisio.herokuapp.com/agenda/gravarAssinatura', dados).subscribe(response => {
        resolve(response);
      });
    });
  }

  gravarEvolucao(dados) {
    return new Promise((resolve, reject) => {
      this.http.post('https://backfisio.herokuapp.com/agenda/gravarEvolucao', dados).subscribe(response => {
        resolve(response);
      });
    });
  }

  excluirAtendimento(dados) {
    return new Promise((resolve, reject) => {
      this.http.post('https://backfisio.herokuapp.com/agenda/excluir', dados).subscribe(response => {
        resolve(response);
      });
    });
  }

  gravarStatus(dados) {
    return new Promise((resolve, reject) => {
      this.http.post('https://backfisio.herokuapp.com/agenda/gravarStatus', dados).subscribe(response => {
        resolve(response);
      });
    });
  }  

  enviarExames(idpaciente) {
    return new Promise((resolve, reject) => {
      this.http.post('https://backfisio.herokuapp.com/agenda/enviarExamesPaciente', idpaciente).subscribe(response => {
        resolve(response);
      });
    });
  }    
}

//https://backfisio.herokuapp.com rota heroku
