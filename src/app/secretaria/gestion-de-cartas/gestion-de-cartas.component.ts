import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ListboxModule } from 'primeng/listbox';
import { MessageModule } from 'primeng/message';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-gestion-de-cartas',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    TableModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    ToastModule,
    MessageModule,
    DropdownModule,
    AvatarModule,
    ListboxModule,
  ],
  templateUrl: './gestion-de-cartas.component.html',
  styleUrls: ['./gestion-de-cartas.component.css'],
})
export class GestionDeCartasComponent {
  userCareer = 'Ingeniería de Sistemas';
  period = '2024-1';
  showList = false;
  searchQuery = '';
  itemList = Array(10).fill({ name: 'List item' }); // Simulación de datos
  selectedItem: any = null; // Variable para almacenar el ítem seleccionado
  showTooltip = false; // Controla la visualización del mensaje de advertencia

  // Filtra los elementos según el query de búsqueda
  get filteredItems() {
    return this.itemList.filter(item => item.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
  }

  // Muestra la vista de lista y oculta las columnas de carrera
  showListView() {
    this.showList = true;
  }

  // Función para regresar a la vista principal
  onBack() {
    this.showList = false;
    this.selectedItem = null; // Reinicia la selección al regresar
  }

  // Función para seleccionar un ítem de la lista
  selectItem(item: any) {
    this.selectedItem = item;
    this.showTooltip = false; // Oculta el mensaje de advertencia al seleccionar un ítem
  }

  // Función para manejar el evento de entrada del mouse en el contenedor vacío
  onEmptyContainerMouseEnter() {
    if (!this.selectedItem) {
      this.showTooltip = true; // Muestra el mensaje de advertencia si no hay ningún ítem seleccionado
    }
  }

  // Función para manejar el evento de salida del mouse del contenedor vacío
  onEmptyContainerMouseLeave() {
    this.showTooltip = false; // Oculta el mensaje de advertencia al salir del contenedor vacío
  }
}
