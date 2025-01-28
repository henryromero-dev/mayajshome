import { Component, OnInit } from '@angular/core';
import SwaggerUI from 'swagger-ui';
import { FormsModule } from '@angular/forms';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';
import { getWindow } from 'ssr-window';

const window = getWindow();

@Component({
    selector: 'app-crud',
    standalone: true,
    imports: [MonacoEditorModule, FormsModule],
    templateUrl: './crud.component.html',
    styleUrl: './crud.component.scss'
})
export class CrudComponent implements OnInit {
    public createProductJson: any = {
        schema: {
            name: 'iPhone 13',
            price: 999.99,
            categories: [{
                name: 'Electronics'
            }]
        }
    }
    public createProduct: string = JSON.stringify(this.createProductJson, null, 4);

    public updateProductJson: any = {
        schema: {
            $id: 439432,
            $hash: '60b3b3b3b3b3b3b3b3b3b3b3',
            $guid: '60b3b3b3b3b3b3b3b3b3b3',
            $createdOn: '2021-06-01T00:00:00',
            $updatedOn: '2021-06-01T00:00:00',
            $owner: 0,
            $trash: 0,
            name: 'iPhone 13',
            price: 1099.99
        }
    }
    public updateProduct: string = JSON.stringify(this.updateProductJson, null, 4);

    public deleteProductJson: any = {
        schema: {
            $id: 439432,
            $hash: '60b3b3b3b3b3b3b3b3b3b3b3',
            $guid: '60b3b3b3b3b3b3b3b3b3b3',
            $remove: true
        }
    }
    public deleteProduct: string = JSON.stringify(this.deleteProductJson, null, 4);

    ngOnInit() {
        SwaggerUI({
            domNode: window.document.getElementById('swagger-ui-item'),
            url: 'assets/swagger/crud.json'
        });
    }
}
