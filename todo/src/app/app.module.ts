import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ // registers components/directives & pipes
    AppComponent
  ],
  imports: [  //dependency module
    BrowserModule,FormsModule
  ],
  providers: [], // register & launch a service
  bootstrap: [AppComponent] // loading a component
})
export class AppModule { }

// Angular module - is a registry which helps to "register & load"
// other custom angular entities



