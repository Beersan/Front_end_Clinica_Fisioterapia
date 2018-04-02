import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { GrupoProvider } from '../../providers/grupo/grupo';
import { CadastrarGrupoPage } from '../cadastrar-grupo/cadastrar-grupo';
import { CadastrarGrupo } from '../../models/model.cadastrar-grupo';

/**
 * Generated class for the ListarGrupoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listar-grupo',
  templateUrl: 'listar-grupo.html',
})
export class ListarGrupoPage {

  grupos: any;

  constructor(public navCtrl: NavController, 
              private provider:GrupoProvider, 
              private alertCtrl: AlertController,
              public navParams: NavParams) {
  }

  ionViewWillEnter(){
    this.listarGrupo();
  }

  incluir(){
    this.navCtrl.push(CadastrarGrupoPage, {
      rootNavCtrl: this.navCtrl
    });
  }

  listarGrupo(){
    this.provider.retornarGrupo().then(
      data => {
        this.grupos = data;
        console.log(this.grupos);
      }
    )
    .catch(error => alert(error));
  }

  excluir(idGrupo){    
    let alert = this.alertCtrl.create({
      title: 'Excluir!',
      message: 'Deseja excluir esse grupo?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel'
        },
        {
          text: 'Excluir',
          handler: () => {
            this.provider.excluirEstagiario({
              idGrupo: idGrupo
            }).then((result) => {
              this.listarGrupo();    
              this.showAlert();
            }); 
          }
        }
      ]
    });
    alert.present();
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Sucesso!',
      subTitle: 'Grupo excluído.',
      buttons: ['Ok']
    });
    alert.present();
  }

  editar(grupo: CadastrarGrupo){
    this.navCtrl.push(CadastrarGrupoPage, {
      rootNavCtrl: this.navCtrl,
      grupo: grupo
    });
  }
}
