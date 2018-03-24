import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PreCadastroPageModule } from '../pages/pre-cadastro/pre-cadastro.module';
import { ReservarSalaPageModule } from '../pages/reservar-sala/reservar-sala.module';
import { CadastrarEspecialidadePage } from '../pages/cadastrar-especialidade/cadastrar-especialidade';
import { CadastrarEstagiarioPage } from '../pages/cadastrar-estagiario/cadastrar-estagiario';
import { CadastrarEstagiarioProvider } from '../providers/estagiario/estagiario';
import { FinalizarPreCadastroPageModule } from '../pages/finalizar-pre-cadastro/finalizar-pre-cadastro.module';
import { FinalizarPreCadastroPage } from '../pages/finalizar-pre-cadastro/finalizar-pre-cadastro';
import { CadastrarProfessorPage } from '../pages/cadastrar-professor/cadastrar-professor';
import { CadastrarGrupoPage } from '../pages/cadastrar-grupo/cadastrar-grupo';
import { RelatarProblemasPage } from '../pages/relatar-problemas/relatar-problemas';
import { SortearPacienteGrupoPage } from '../pages/sortear-paciente-grupo/sortear-paciente-grupo';
import { CadastrarGrupoEstagiariosPage } from '../pages/cadastrar-grupo-estagiarios/cadastrar-grupo-estagiarios';
import { ListarEstagiarioPage } from '../pages/listar-estagiario/listar-estagiario';
import { CadastrarEspecialidadeProvider } from '../providers/cadastrar-especialidade/cadastrar-especialidade';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CadastrarEstagiarioPage,
    ListarEstagiarioPage,
    CadastrarEspecialidadePage,
    CadastrarProfessorPage,
    CadastrarGrupoPage,
    RelatarProblemasPage,
    SortearPacienteGrupoPage,
    CadastrarGrupoEstagiariosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    PreCadastroPageModule,
    ReservarSalaPageModule,
    FinalizarPreCadastroPageModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CadastrarEstagiarioPage,
    ListarEstagiarioPage,
    CadastrarEspecialidadePage,
    CadastrarProfessorPage,
    CadastrarGrupoPage,
    RelatarProblemasPage,
    SortearPacienteGrupoPage,
    CadastrarGrupoEstagiariosPage,
    FinalizarPreCadastroPage,
    CadastrarProfessorPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CadastrarEstagiarioProvider,
    CadastrarEspecialidadeProvider
  ]
})
export class AppModule {}
