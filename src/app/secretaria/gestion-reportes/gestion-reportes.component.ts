import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AvatarModule } from 'primeng/avatar';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gestion-reportes',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, InputTextModule, AvatarModule,],
  templateUrl: './gestion-reportes.component.html',
  styleUrls: ['./gestion-reportes.component.css']
})
export class GestionReportesComponent {
  userCareer = 'Ingeniería de Sistemas';
  period = '2024-1';
  searchQuery = '';
  showList = false;
  selectedItem: any = null; // Variable para almacenar el ítem seleccionado
  studentList = Array(10).fill({ name: 'Student name' }); // Simulación de lista de alumnos
  selectedStudent: any = null; // Almacena el alumno seleccionado
  showTooltip = false; // Controla la visualización del mensaje de advertencia

  // Función para seleccionar un alumno de la lista
  selectStudent(student: any) {
    this.selectedStudent = student;
    this.showTooltip = false; // Oculta el mensaje de advertencia al seleccionar un alumno
  }

  // Función para manejar el evento de entrada del mouse en el contenedor vacío
  onEmptyContainerMouseEnter() {
    if (!this.selectedStudent) {
      this.showTooltip = true; // Muestra el mensaje de advertencia si no hay ningún alumno seleccionado
    }
  }

  // Función para manejar el evento de salida del mouse del contenedor vacío
  onEmptyContainerMouseLeave() {
    this.showTooltip = false; // Oculta el mensaje de advertencia al salir del contenedor vacío
  }
  onBack() {
    this.showList = false;
    this.selectedItem = null; // Reinicia la selección al regresar
  }
}
