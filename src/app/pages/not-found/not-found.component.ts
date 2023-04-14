import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {

  constructor(
    //metemos router para poder hacer navegaciones
    private router: Router
  ) {

  }
  //funcion para el boton, al pulsarlo te lleva a la vist, que es la calculadora
  public return() {
    this.router.navigate(['vist'])
  }
}
