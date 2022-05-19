import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title="Angular Property Binding Example"

  isDisabled= true;
  onSave(){
    for(let i=0; i<10; i++){
      console.log(i + "Hello");
    };
  };
}
