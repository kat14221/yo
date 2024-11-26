import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { PracticasService } from '../services/practica.service';
import { TutorService } from '../services/tutor.service';
import { FormsModule } from '@angular/forms';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-coordinador-asignar',
  standalone: true,
  imports: [InputTextModule,
    ButtonModule,
    RippleModule,
    CardModule, RouterModule, CommonModule, FormsModule ],
  animations: [
      trigger('fadeInOut', [
        transition(':enter', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          animate('300ms ease-in', style({ opacity: 1, transform: 'translateY(0)' })),
        ]),
        transition(':leave', [
          animate('300ms ease-out', style({ opacity: 0, transform: 'translateY(20px)' })),
        ]),
      ]),
    ],
  templateUrl: './coordinador-asignar.component.html',
  styleUrl: './coordinador-asignar.component.css'
})
export class CoordinadorAsignarComponent {
  ppps: any[] = []; 
  filtroLinea: string = '';
  noHayDatos: boolean = false;
  lineas: string[] = ['Software', 'Sistemas']; 
  semestre: string[] = ['2023-1', '2023-2']; 
  mostrarMensaje: boolean = false;
  filtroSemestre: string = '';
  asignados: any[] = []; 
  tutores: any[] = [];
  filtroNombreApellidoLinea = ''; 
  mostrarTodos = false; 
  seleccionados: any[] = []; 
  mostrarModal = false;
  constructor(
    private practicasService: PracticasService,
    private tutorService: TutorService
  ) {}

  ngOnInit(): void {

    this.practicasService.getPracticas().subscribe((data) => {
      this.ppps = data.filter((ppp) => !ppp.tutores); 
    });


    this.tutorService.getTutor().subscribe((data) => {
      this.tutores = data;
    });
  }
  
  filtrarDatos(): void {
    console.log("Semestre seleccionado:", this.filtroSemestre);
    console.log("Línea seleccionada:", this.filtroLinea);
  }

  // Cambiar de línea con las flechas
  cambiarLinea(direccion: number): void {
    const indexActual = this.lineas.indexOf(this.filtroLinea);
    const nuevoIndex = indexActual + direccion;

    if (nuevoIndex >= 0 && nuevoIndex < this.lineas.length) {
      this.filtroLinea = this.lineas[nuevoIndex];
      this.filtrarDatos(); // Filtra los datos después de cambiar la línea
    }
  }
  filtrarPPP(): void {
    this.practicasService.getPracticas().subscribe((data) => {
      this.ppps = data.filter(
        (ppp) =>
          (!this.filtroLinea || ppp.lineas?.nombre === this.filtroLinea) &&
          (!this.filtroSemestre || ppp.practicantes_ep.semestre === this.filtroSemestre) &&
          !ppp.tutores
      );
    });
  }


  filtrarTutores(): any[] {
    return this.tutores.filter(
      (tutor) =>
        tutor.personas.nombre.includes(this.filtroNombreApellidoLinea) ||
        tutor.personas.apellido.includes(this.filtroNombreApellidoLinea) ||
        tutor.lineas.nombre.includes(this.filtroNombreApellidoLinea)
    ).slice(0, this.mostrarTodos ? undefined : 10);
  }


  toggleSeleccion(ppp: any): void {
    if (this.seleccionados.includes(ppp)) {
      this.seleccionados = this.seleccionados.filter((p) => p !== ppp);
    } else {
      this.seleccionados.push(ppp);
    }
  }


  agregarPracticantes(tutorIndex: number): void {
    const tutor = this.tutores[tutorIndex];
    if (tutor.asignados + this.seleccionados.length <= 30) {
      this.seleccionados.forEach((ppp) => {
        tutor.asignados++;
        ppp.tutores = tutor;
        this.practicasService.updatePracticas(ppp.id, ppp).subscribe(); // Actualizar en el backend
      });
      this.seleccionados = []; // Limpiar selección
    } else {
      alert('No se pueden asignar más de 30 alumnos a un tutor.');
    }
  }
  verAsignados(tutor: any): void {
    this.asignados = this.ppps.filter((ppp) => ppp.tutores?.id === tutor.id);
    this.mostrarModal = true;
  }
  
  cerrarModal(): void {
    this.mostrarModal = false;
  }
  confirmarAsignaciones(): void {
    this.mostrarMensaje = true;
    setTimeout(() => {
      this.mostrarMensaje = false; 
      
    }, 3000);
  }
}
