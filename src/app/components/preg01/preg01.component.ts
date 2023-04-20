import { Component } from '@angular/core';
import { PrincipalComponent } from 'src/app/principal/principal.component';

@Component({
  selector: 'app-preg01',
  templateUrl: './preg01.component.html',
  styleUrls: ['./preg01.component.css']
})
export class Preg01Component {
  constructor (private Principal:PrincipalComponent){}
  siguiente(){
    this.Principal.Siguiente();
  }

}
