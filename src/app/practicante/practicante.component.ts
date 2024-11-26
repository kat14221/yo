import { Component } from '@angular/core';
import { SidebarpracticanteComponent } from "./sidebarpracticante/sidebarpracticante.component";
import { RedireccionamientoComponent } from "./redireccionamiento/redireccionamiento.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-practicante',
  standalone: true,
  imports: [RouterOutlet,
    SidebarpracticanteComponent,
    FormsModule,
    RedireccionamientoComponent,
    CommonModule],
  templateUrl: './practicante.component.html',
  styleUrl: './practicante.component.css'
})
export class PracticanteComponent {
  title = 'app-clovalpy';
  isRedirected = false; // Controla si mostrar el sidebar o la vista de redireccionamiento

  // Método para cambiar el estado a redireccionado
  redirectToSidebarpracticante() {
    this.isRedirected = true;
  }
}
