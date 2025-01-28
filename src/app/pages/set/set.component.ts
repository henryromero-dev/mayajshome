import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';
import SwaggerUI from 'swagger-ui';
import { getWindow } from 'ssr-window';

const window = getWindow();
@Component({
    selector: 'app-set',
    standalone: true,
    imports: [MonacoEditorModule, FormsModule],
    templateUrl: './set.component.html',
    styleUrl: './set.component.scss'
})
export class SetComponent {
    public setProductJson: any = {
        'schema': {
            'status': [
                { 'op': 'equals', 'val': true, newval: false },
            ]
        }
    };
    public setProduct: string = JSON.stringify(this.setProductJson, null, 4);

    ngOnInit() {
        SwaggerUI({
            domNode: window.document.getElementById('swagger-ui-item'),
            url: 'assets/swagger/set.json'
        });
    }
}
