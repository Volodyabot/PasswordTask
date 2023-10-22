import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordComponent } from './password/password.component';
import { CustomInputComponent } from './password/custom-input/custom-input.component';
import { PasswordStrengthComponent } from './password/password-strength/password-strength.component';
import { HelpTextComponent } from './password/help-text/help-text.component';

@NgModule({
  declarations: [
    AppComponent,
    PasswordComponent,
    CustomInputComponent,
    PasswordStrengthComponent,
    HelpTextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
