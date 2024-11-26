import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown'; // Importar DropdownModule

@Component({
  selector: 'app-gestionar-carta-presentacion',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    AvatarModule,
    DropdownModule, // Agregar aquí
  ],
  templateUrl: './gestionar-carta-presentacion.component.html',
  styleUrl: './gestionar-carta-presentacion.component.css',
})
export class GestionarCartaPresentacionComponent {
  showList = false;
  selectedItem: any = null; // Variable para almacenar el ítem seleccionado

  onBack() {
    this.showList = false;
    this.selectedItem = null; // Reinicia la selección al regresar
  }

  years: { label: string; value: string }[] = [
    { label: '2023', value: '2023' },
    { label: '2024', value: '2024' },
    { label: '2025', value: '2025' },
  ]; // Opciones para el dropdown

  selectedYear: string = '2024'; // Año seleccionado por defecto

  searchQuery: string = ''; // Campo de búsqueda
  cartas = [
    { fecha: '23/06/2024', nombre: 'BCP', linea: 'SOFTWARE' },
    { fecha: '23/06/2024', nombre: 'BCP', linea: 'SOFTWARE' },
  ]; // Datos para las cartas

  selectedLinea: string = ''; // Línea seleccionada
  lineasCarrera = [
    { label: 'Línea de carrera 1', value: '1' },
    { label: 'Línea de carrera 2', value: '2' },
    { label: 'Línea de carrera 3', value: '3' },
  ]; // Opciones de líneas de carrera
}
