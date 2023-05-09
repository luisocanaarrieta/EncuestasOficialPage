import { Component } from '@angular/core';
import { PrincipalComponent } from 'src/app/principal/principal.component';

@Component({
  selector: 'app-preg02',
  templateUrl: './preg02.component.html',
  styleUrls: ['./preg02.component.css']
})
export class Preg02Component {
  constructor (private Principal:PrincipalComponent){}
  siguiente(){
    this.Principal.Siguiente();
  }
  retroceder(){
    this.Principal.Retroceder();
  }
}
