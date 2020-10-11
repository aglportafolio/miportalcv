import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { NavbarSocialComponent } from './portafolio/navbar-social/navbar-social.component';
import { EncabezadoPresentacionComponent } from './portafolio/encabezado-presentacion/encabezado-presentacion.component';
import { FormacionAcademicaComponent } from './portafolio/formacion-academica/formacion-academica.component';

@NgModule({
  declarations: [
    AppComponent,
    PortafolioComponent,
    NavbarSocialComponent,
    EncabezadoPresentacionComponent,
    FormacionAcademicaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
