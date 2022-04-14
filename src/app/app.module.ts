import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DocumentService } from './document.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [AppComponent, RegistrationComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [DocumentService],
  bootstrap: [AppComponent],
})
export class AppModule {}
