import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';
import { getWindow } from 'ssr-window';
import SwaggerUI from 'swagger-ui';

const window = getWindow();
@Component({
    selector: 'app-storage',
    standalone: true,
    imports: [MonacoEditorModule, FormsModule],
    templateUrl: './storage.component.html',
    styleUrl: './storage.component.scss'
})
export class StorageComponent {
    public storageProductJson: any = {
        'schema': {
            'status': [
                { 'op': 'equals', 'val': true, newval: false },
            ]
        }
    };
    public storageProduct: string = JSON.stringify(this.storageProductJson, null, 4);

    ngOnInit() {
        SwaggerUI({
            domNode: window.document.getElementById('swagger-ui-item'),
            url: 'assets/swagger/storage.json'
        });
    }
}
