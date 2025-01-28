import { Component, OnInit } from '@angular/core';
import SwaggerUI from 'swagger-ui';

@Component({
    selector: 'maya-objects',
    standalone: true,
    imports: [],
    templateUrl: './objects.component.html',
    styleUrl: './objects.component.scss'
})
export class ObjectsComponent implements OnInit {
    ngOnInit() {
        SwaggerUI({
            domNode: document.getElementById('swagger-ui-item'),
            url: 'assets/swagger/objects.json'
        });
    }
}
