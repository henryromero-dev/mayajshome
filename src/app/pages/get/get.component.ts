import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';
import SwaggerUI from 'swagger-ui';
import { getWindow } from 'ssr-window';

const window = getWindow();

@Component({
    selector: 'app-get',
    standalone: true,
    imports: [MonacoEditorModule, FormsModule],
    templateUrl: './get.component.html',
    styleUrl: './get.component.scss'
})
export class GetComponent {
    public orderJson: any = {
        'schema':  {
            "orderDate": [{"op": "lgt", "val": "2023-12-25"}]
        }
    };
    public order: string = JSON.stringify(this.orderJson, null, 4);

    ngOnInit() {
        SwaggerUI({
            domNode: window.document.getElementById('swagger-ui-item'),
            url: 'assets/swagger/get.json'
        });
    }
}
