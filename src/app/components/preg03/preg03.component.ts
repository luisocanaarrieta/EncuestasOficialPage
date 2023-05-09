import { Component } from '@angular/core';
import { PrincipalComponent } from 'src/app/principal/principal.component';

@Component({
  selector: 'app-preg03',
  templateUrl: './preg03.component.html',
  styleUrls: ['./preg03.component.css']
})
export class Preg03Component {
  constructor (private Principal:PrincipalComponent){}
  siguiente(){
    this.Principal.Siguiente();
  }

  retroceder(){
    this.Principal.Retroceder();
  }

}
