import { Component, OnInit } from '@angular/core';
import SwaggerUI from 'swagger-ui';

@Component({
    selector: 'maya-schema',
    standalone: true,
    imports: [],
    templateUrl: './schema.component.html',
    styleUrl: './schema.component.scss'
})
export class SchemaComponent implements OnInit {
    ngOnInit() {
        SwaggerUI({
            domNode: document.getElementById('swagger-ui-item'),
            url: 'assets/swagger/schema.json'
        });
    }
}
