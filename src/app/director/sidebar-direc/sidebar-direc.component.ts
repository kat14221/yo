import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { OverlayPanel, OverlayPanelModule } from 'primeng/overlaypanel';
import { RippleModule } from 'primeng/ripple';
import { Sidebar, SidebarModule } from 'primeng/sidebar';
import { StyleClassModule } from 'primeng/styleclass';

@Component({
  selector: 'app-sidebardirec',
  standalone: true,
  imports: [CommonModule,
    SidebarModule,
    ButtonModule,
    RippleModule,
    AvatarModule,
    StyleClassModule,
    RouterModule,
    OverlayPanelModule,
    FormsModule],
  templateUrl: './sidebar-direc.component.html',
  styleUrl: './sidebar-direc.component.css'
})
export class SidebarDirecComponent {
  @ViewChild('sidebardirecRef') sidebardirecRef!: Sidebar;
  @ViewChild('overlayPanel') overlayPanel!: OverlayPanel;

  sidebarVisible: boolean = false;
  isCollapsed: boolean = false;
  selectedItem: string = 'usuarios'; // Selección por defecto

  closeCallback(e: Event): void {
    this.sidebardirecRef.close(e);
  }

  toggleSidebar(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  selectItem(item: string): void {
    this.selectedItem = item;
  }

  logout(): void {
    console.log("Cerrando sesión...");
    // Implementa la lógica de cierre de sesión aquí
  }
}
