import { Component } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {
  Next=0;
  Siguiente(){
    this.Next+=1;
  }

  Retroceder(){
    this.Next-=1;
  }
}
