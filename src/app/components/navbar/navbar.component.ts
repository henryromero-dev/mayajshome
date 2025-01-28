import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'maya-navbar',
    standalone: true,
    imports: [CommonModule, MaterialModule, FormsModule],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
    public search: string = '';
}
