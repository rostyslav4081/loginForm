import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ToastModule} from "primeng/toast";
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {ReactiveFormsModule} from "@angular/forms";
import {MessageService} from "primeng/api";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {InputTextModule} from "primeng/inputtext";
import { PasswordMatchDirective } from './shared/password-match.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    PasswordMatchDirective
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ToastModule,
    ButtonModule,
    CardModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    InputTextModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
