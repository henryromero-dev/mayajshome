import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';
import { getWindow } from 'ssr-window';
import SwaggerUI from 'swagger-ui';

const window = getWindow();
@Component({
    selector: 'app-remove',
    standalone: true,
    imports: [MonacoEditorModule, FormsModule],
    templateUrl: './remove.component.html',
    styleUrl: './remove.component.scss'
})
export class RemoveComponent {
    public removeProductJson: any = {
        'schema': {
            'status': [
                { 'op': 'equals', 'val': true, newval: false },
            ]
        }
    };
    public removeProduct: string = JSON.stringify(this.removeProductJson, null, 4);

    ngOnInit() {
        SwaggerUI({
            domNode: window.document.getElementById('swagger-ui-item'),
            url: 'assets/swagger/remove.json'
        });
    }
}
