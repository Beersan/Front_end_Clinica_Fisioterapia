import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { FilaEsperaProvider } from '../../providers/fila-espera/fila-espera';
import { IncluirExamesTermosPage } from '../incluir-exames-termos/incluir-exames-termos';
import { VincularPacienteEstagiarioPage } from '../vincular-paciente-estagiario/vincular-paciente-estagiario';
import { AgendarAtendimentoPage } from '../agendar-atendimento/agendar-atendimento';

@IonicPage()
@Component({
  selector: 'page-fila-de-espera',
  templateUrl: 'fila-de-espera.html',
})

export class FilaDeEsperaPage {
  pacientes: any;
  listarPacientesF: any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private provider: FilaEsperaProvider,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController
  ){}

  ionViewWillEnter(){
    this.listarPacientes();
  }

  filtrarItens(searchbar) {
    this.pacientes = this.listarPacientesF;
    var q = searchbar.srcElement.value;
    if (!q) {
      return;
    }
    this.pacientes = this.pacientes.filter((v) => {
      if(v.nomepaciente && q) {
        if (v.nomepaciente.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
          return false;
      }
    });
  }

  listarPacientes(){
    this.provider.retornarPacientesFila().then(
      data => {
        this.pacientes = data;
        this.listarPacientesF = data;
      }
    )
    .catch(error => alert(error));
  }

  adicionarAnexos(paciente){
    this.navCtrl.push(IncluirExamesTermosPage, {
      rootNavCtrl: this.navCtrl,
      paciente: paciente
    });
  }

  vincularEstagiario(idPaciente){
    this.navCtrl.push(VincularPacienteEstagiarioPage, {
      rootNavCtrl: this.navCtrl,
      idPaciente: idPaciente
    });
  }

  agendar(paciente){
    this.navCtrl.push(AgendarAtendimentoPage, {
      rootNavCtrl: this.navCtrl,
      paciente: paciente
    });
  }

  visualizar(paciente) {
    var valor = JSON.parse(JSON.stringify(paciente));
    var mensagem = "CPF: " + valor.cpfpaciente + "\n"
    + "RG: " + valor.rgpaciente + "\n"
    + "Endereço: " + valor.enderecopaciente + ", " + valor.numeropaciente +  "\n"
    + "Bairro: " + valor.bairropaciente + "\n"
    + "Cidade: " + valor.cidadepaciente + "\n"
    + "Telefone 2: " + valor.telefone2 + "\n"
    + "Renda: " + valor.rendapaciente + "\n";

    let toast = this.toastCtrl.create({
      message: mensagem,
      duration: 3000,
      position: 'botton'
    }); 
    toast.present();
  }
}
