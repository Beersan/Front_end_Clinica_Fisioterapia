import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { NgForm, FormsModule, Validators, FormBuilder } from '@angular/forms';
import { AgendaProvider } from '../../providers/agenda/agenda';

/**
 * Generated class for the AgendarAtendimentoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agendar-atendimento',
  templateUrl: 'agendar-atendimento.html',
})
export class AgendarAtendimentoPage {

  paciente: any;
  pacientes: any;
  diaDaSemana: any;
  dias: any;
  horario: any;
  horarios: any;
  numeroSessoes: any;
  dataInicioAtendimento: any;

  validarAgendarAtendimento: any = {};
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private provider: AgendaProvider,
    public alertCtrl: AlertController,
    private formBuilder: FormBuilder) 
  {
    this.validarAgendarAtendimento = formBuilder.group ({
      paciente:['', Validators.required],
      diaDaSemana:['', Validators.required],      
      horario:['', Validators.required],
      numeroSessoes:['', Validators.required],
      dataInicioAtendimento:['', Validators.required],
    })
  }

  ionViewDidLoad() {
    this.listarPaciente();
    this.listarDia();
    this.listarHorario();
  }

  cancelar(){
    this.navCtrl.pop();
  }

  listarPaciente(){
    if(this.pacientes == null){
      this.provider.retornarPaciente().then(
        data => {
            this.pacientes = data;
          }
        )
        .catch(error => alert(error));
    } 
  }

  listarDia(){
    if(this.dias == null){
      this.provider.retornarDia().then(
        data => {
            this.dias = data;
          }
        )
        .catch(error => alert(error));
    } 
  }

  listarHorario(){
    if(this.horarios == null){
      this.provider.retornarHorario().then(
        data => {
            this.horarios = data;
          }
        )
        .catch(error => alert(error));
    } 
  }

  cadastrarAgendaPaciente(){ 
    this.provider.create({
      paciente: this.paciente,
      dia: this.diaDaSemana,
      horario: this.horario,
      numeroSessoes: this.numeroSessoes,
      dataInicioAtendimento: this.dataInicioAtendimento
    }).then((result) =>{
      this.showAlert();
    });
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Sucesso!',
      subTitle: 'Agenda gravada.',
      buttons: ['Ok']
    });
    alert.present();
    this.navCtrl.pop();
  }



 

}