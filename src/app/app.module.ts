import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { ButtonComponent } from './components/button/button.component';
import { SpecsComponent } from './components/specs/specs.component';
import { SpecItemComponent } from './components/spec-item/spec-item.component';
import { AddSpecComponent } from './components/add-spec/add-spec.component';

const appRoutes: Routes = [
  {path: '', component: SpecsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    ButtonComponent,
    SpecsComponent,
    SpecItemComponent,
    AddSpecComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
