import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PetComponent } from './pet/pet.component';
import { BPropertyComponent } from './b-property/b-property.component';

@NgModule({
  declarations: [
    AppComponent,
    PetComponent,
    BPropertyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
