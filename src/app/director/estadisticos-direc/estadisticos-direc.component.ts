import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { LineaDirecComponent } from './linea-direc/linea-direc.component';
import { AniosDirecComponent } from './anios-direc/anios-direc.component';
import { EmpresaDirecComponent } from './empresa-direc/empresa-direc.component';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-estadisticos-direc',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule, LineaDirecComponent, AniosDirecComponent, EmpresaDirecComponent, ChartModule],
  templateUrl: './estadisticos-direc.component.html',
  styleUrl: './estadisticos-direc.component.css'
})
export class EstadisticosDirecComponent {
  carreraDialogVisible = false;
  showList = false;
  selectedItem: any = null;

  showCarreraDialog() {
    this.carreraDialogVisible = true;
  }

  onBack() {
    this.showList = false;
    this.selectedItem = null;
  }
}
