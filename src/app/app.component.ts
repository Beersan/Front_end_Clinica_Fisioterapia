import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CadastrarEstagiarioPage } from '../pages/cadastrar-estagiario/cadastrar-estagiario';
import { CadastrarEspecialidadePage } from '../pages/cadastrar-especialidade/cadastrar-especialidade';
import { PreCadastroPage } from '../pages/pre-cadastro/pre-cadastro';
import { ReservarSalaPage } from '../pages/reservar-sala/reservar-sala';
import { FinalizarPreCadastroPage } from '../pages/finalizar-pre-cadastro/finalizar-pre-cadastro';
import { CadastrarProfessorPage } from '../pages/cadastrar-professor/cadastrar-professor';
import { CadastrarGrupoPage } from '../pages/cadastrar-grupo/cadastrar-grupo';
import { SortearPacienteGrupoPage } from '../pages/sortear-paciente-grupo/sortear-paciente-grupo';
import { RelatarProblemaPage } from '../pages/relatar-problema/relatar-problema';
import { CadastrarGrupoEstagiariosPage } from '../pages/cadastrar-grupo-estagiarios/cadastrar-grupo-estagiarios';
import { ListarEstagiarioPage } from '../pages/listar-estagiario/listar-estagiario';
import { ListarGrupoPage } from '../pages/listar-grupo/listar-grupo';
import { ListarPacientesPage } from '../pages/listar-pacientes/listar-pacientes';
import { ListarProfessoresPage } from '../pages/listar-professores/listar-professores';
import { ListarEspecialidadePage } from '../pages/listar-especialidade/listar-especialidade';
import { ListarGrupoEstagiariosPage } from '../pages/listar-grupo-estagiarios/listar-grupo-estagiarios';
import { FilaDeEsperaPage } from '../pages/fila-de-espera/fila-de-espera';
import firebase from 'firebase';
import { FIREBASE_CONFIG } from './app.firebase.config';
import { CadastroSemestrePage } from '../pages/cadastro-semestre/cadastro-semestre';
import { ListarSemestrePage } from '../pages/listar-semestre/listar-semestre';
import { CadastrarHorarioProfessorPage } from '../pages/cadastrar-horario-professor/cadastrar-horario-professor';
import { ListarReservasPage } from '../pages/listar-reserva-salas/listar-reserva-salas';
import { IncluirExamesTermosPage } from '../pages/incluir-exames-termos/incluir-exames-termos';
import { VincularPacienteEstagiarioPage } from '../pages/vincular-paciente-estagiario/vincular-paciente-estagiario';
import { ListarPacientesAgendadosPage } from '../pages/listar-pacientes-agendados/listar-pacientes-agendados';
import { AgendarAtendimentoPage } from '../pages/agendar-atendimento/agendar-atendimento';
import { ImprimirCronogramaPage } from '../pages/imprimir-cronograma/imprimir-cronograma';


// RxJS
import { ReplaySubject } from "rxjs/ReplaySubject";
import { ArrayObservable } from "rxjs/observable/ArrayObservable";

// Side Menu Component
import { SideMenuSettings } from './../shared/side-menu-content/models/side-menu-settings';
import { SideMenuOption } from './../shared/side-menu-content/models/side-menu-option';
import { SideMenuContentComponent } from './../shared/side-menu-content/side-menu-content.component';
import { GerenciamentoPage } from '../pages/gerenciamento/gerenciamento';
import { EvolucaoDiariaPage } from '../pages/evolucao-diaria/evolucao-diaria';
import { IncluirAssinaturaPage } from '../pages/incluir-assinatura/incluir-assinatura';
import { LoginPage } from '../pages/login/login';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //@ViewChild(Nav) nav: Nav;
  @ViewChild(Nav) navCtrl: Nav;

  rootPage: any;
	url: any;
  pages: Array<{title: string, component: any}>;

  // Get the instance to call the public methods
	@ViewChild(SideMenuContentComponent) sideMenu: SideMenuContentComponent;

  // Options to show in the SideMenuContentComponent
	public options: Array<SideMenuOption>;

  // Settings for the SideMenuContentComponent
	public sideMenuSettings: SideMenuSettings = {
		accordionMode: true,
		showSelectedOption: true,
		selectedOptionClass: 'active-side-menu-option'		
  }
  
  private unreadCountObservable: any = new ReplaySubject<number>(0);

  constructor(
	  public platform: Platform,
      public statusBar: StatusBar,
      public splashScreen: SplashScreen,
	  private alertCtrl: AlertController,
	  private menuCtrl: MenuController,
	  public afAuth: AngularFireAuth
	) {
		this.initializeApp();	
		this.url = window.location.href;
		this.url = this.url.split("/#/")[1];		
		if (this.url == 'preCadastro'){
			this.rootPage = PreCadastroPage;			
		}else if(this.url == 'ouvidoria'){			
			this.rootPage = RelatarProblemaPage;			
		}else {
			const authObserver = afAuth.authState.subscribe( user => {	
				if (user) {
					this.rootPage = HomePage;
					authObserver.unsubscribe();
				} else {
					this.rootPage = LoginPage;
					authObserver.unsubscribe();
				}
			});

		}
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      // Initialize some options
			this.initializeOptions();
    });

    // Change the value for the batch every 5 seconds
		setInterval(() => {
			this.unreadCountObservable.next(Math.floor(Math.random() * 10) + 1);
    }, 5000);
    
  }

  private initializeOptions(): void {
		this.options = new Array<SideMenuOption>();
		
		// CADASTROS
		this.options.push({
			displayText: 'Cadastros',
			iconName:'add-circle',
			suboptions: [
				{
					iconName: 'calendar',
					displayText: 'Semestre',
					component: ListarSemestrePage
				},
				{
					iconName: 'ribbon',
					displayText: 'Subárea',
					component: ListarEspecialidadePage
				},
				{
					iconName: 'school',
					displayText: 'Professor',
					component: ListarProfessoresPage
				},	
				{
					iconName: 'contact',
					displayText: 'Estagiário',
					component: ListarEstagiarioPage
				},				
				{
					iconName: 'people',
					displayText: 'Grupo',
					component: ListarGrupoPage
				},
				{
					iconName: 'ios-people',
					displayText: 'Grupos de estagiários',
					component: ListarGrupoEstagiariosPage
				}						
			]
		});

		//MENU E SUBMENU TRIAGEM
		this.options.push({
			displayText: 'Triagem',
			iconName:'ios-list-box',
			suboptions: [
				{
					iconName: 'document',
					displayText: 'Realizar Pré-cadastro',
					component: PreCadastroPage
				},
				{
					iconName: 'list-box',
					displayText: 'Lista de Pré-cadastros',
					component: ListarPacientesPage
				}
			]
		});

		//MENU E SUB MENU PACIENTES
		this.options.push({
			displayText: 'Agenda',
			iconName:'pulse',
			suboptions: [
				{
					iconName: 'contacts',
					displayText: 'Fila de espera',
					component: FilaDeEsperaPage
				},
				{
					iconName: 'clipboard',
					displayText: 'Agenda',
					component: ListarPacientesAgendadosPage
				}
			]
		});

		//MENU RESERVA DE SALAS
		this.options.push({
			iconName: 'book',
			displayText: 'Reserva de salas',
			component: ListarReservasPage
		});
	}

	public onOptionSelected(option: SideMenuOption): void {
		this.menuCtrl.close().then(() => {
			if (option.custom && option.custom.isLogin) {
				this.presentAlert('You\'ve clicked the login option!');
			} else if (option.custom && option.custom.isLogout) {
				this.presentAlert('You\'ve clicked the logout option!');
			} else if (option.custom && option.custom.isExternalLink) {
				let url = option.custom.externalUrl;
				window.open(url, '_blank');
			} else {
				// Get the params if any
				const params = option.custom && option.custom.param;

				// Redirect to the selected page
				this.navCtrl.push(option.component, params);
			}
		});
	}
    
  public collapseMenuOptions(): void {
    this.sideMenu.collapseAllOptions();
  }
  
  public presentAlert(message: string): void {
    let alert = this.alertCtrl.create({
    title: 'Information',
    message: message,
    buttons: ['Ok']
  });
    alert.present();
  }		
}
