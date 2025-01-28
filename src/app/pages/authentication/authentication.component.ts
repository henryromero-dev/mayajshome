import { Component } from '@angular/core';
import SwaggerUI from 'swagger-ui';

@Component({
    selector: 'maya-authentication',
    standalone: true,
    imports: [],
    templateUrl: './authentication.component.html',
    styleUrl: './authentication.component.scss'
})
export class AuthenticationComponent {
    ngOnInit() {
        SwaggerUI({
            domNode: document.getElementById('swagger-ui-item'),
            url: 'assets/swagger/authentication.json'
        });
    }
}