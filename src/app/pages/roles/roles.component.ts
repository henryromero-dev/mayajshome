import { Component } from '@angular/core';
import SwaggerUI from 'swagger-ui';

@Component({
    selector: 'maya-roles',
    standalone: true,
    imports: [],
    templateUrl: './roles.component.html',
    styleUrl: './roles.component.scss'
})
export class RolesComponent {
    ngOnInit() {
        SwaggerUI({
            domNode: document.getElementById('swagger-ui-item'),
            url: 'assets/swagger/roles.json'
        });
    }
}
