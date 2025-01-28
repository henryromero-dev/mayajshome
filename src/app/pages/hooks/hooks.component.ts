import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';
import { getWindow } from 'ssr-window';
import SwaggerUI from 'swagger-ui';

@Component({
    selector: 'app-hooks',
    standalone: true,
    imports: [MonacoEditorModule, FormsModule],
    templateUrl: './hooks.component.html',
    styleUrl: './hooks.component.scss'
})
export class HooksComponent {
    
    ngOnInit() {
    }
}
