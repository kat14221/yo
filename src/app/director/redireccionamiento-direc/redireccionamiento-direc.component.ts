import { Component, EventEmitter, Output } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-redireccionamiento-direc',
  standalone: true,
  imports: [CardModule,ButtonModule,RouterModule],
  templateUrl: './redireccionamiento-direc.component.html',
  styleUrl: './redireccionamiento-direc.component.css'
})
export class RedireccionamientoDirecComponent {
  constructor (private router : Router){

  }
  
  
    @Output() onRedirect = new EventEmitter<void>();
  
    navigateToSidebar() {
      //this.onRedirect.emit();
      this.router.navigate(['/sidebardirec']);
    }
}
