import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';
import { getWindow } from 'ssr-window';
import SwaggerUI from 'swagger-ui';


const window = getWindow();
@Component({
  selector: 'app-events',
  standalone: true,
  imports: [MonacoEditorModule, FormsModule],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent {
    public eventsJson: any = {
        'schema': {
            'type': 'guess',
            'name': 'manage-invitations',
            'parameters': {
                'dateFrom': '2021-01-01',
                'dateTo': '2025-12-31',
                'status': 'pending'
            }
        }
    };
    public events: string = JSON.stringify(this.eventsJson, null, 4);

    ngOnInit() {
        SwaggerUI({
            domNode: window.document.getElementById('swagger-ui-item'),
            url: 'assets/swagger/events.json'
        });
    }
}
