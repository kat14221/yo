import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SidebarDirecComponent } from './sidebar-direc/sidebar-direc.component';
import { RedireccionamientoDirecComponent } from './redireccionamiento-direc/redireccionamiento-direc.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-director',
  standalone: true,
  imports: [SidebarDirecComponent, FormsModule, RedireccionamientoDirecComponent, CommonModule, RouterOutlet],
  templateUrl: './director.component.html',
  styleUrl: './director.component.css'
})
export class DirectorComponent {
  title = 'app-clovalpy';
  isRedirected = false; // Controla si mostrar el sidebar o la vista de redireccionamiento

  // Método para cambiar el estado a redireccionado
  redirectToSidebarDirector() {
    this.isRedirected = true;
  }
}
