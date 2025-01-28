import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';
import SwaggerUI from 'swagger-ui';
import { getWindow } from 'ssr-window';

const window = getWindow();

@Component({
    selector: 'app-select',
    standalone: true,
    imports: [MonacoEditorModule, FormsModule],
    templateUrl: './select.component.html',
    styleUrl: './select.component.scss'
})
export class SelectComponent {
    public simpleFilterJson: any = {
        schema: {
            fistname: [{ op: 'like', val: 'Henry'}],
            lastname: ''
        },
        pagination: {
            page: 1,
            pageSize: 10
        }
    }
    public simpleFilter: string = JSON.stringify(this.simpleFilterJson, null, 4);

    public nestedFilterJson: any = {
        schema: {
            customer: {
                firstname: '',
                lastname: '',
                users: {
                    username: '',
                    email: [{ op: 'equals', val: 'henry.ford@mayajs.com'}]
                }
            },
        },
        pagination: {
            page: 1,
            pageSize: 10
        }
    }
    public nestedFilter: string = JSON.stringify(this.nestedFilterJson, null, 4);

    public complexFilterJson: any = {
        schema: {
            total: '',
            orderdetails: [{
                products: {
                    name: '',
                    price: '',
                    categories: [{
                        name: ''
                    }]
                }, 
                quantity: ''
            }],
            customer: {
                firstname: '',
                lastname: '',
                users: {
                    username: '',
                    email: ''
                }
            }
        },
        where: [
            [{ op: 'lgt', path: 'total', val: 1000}],
            [{ con: 'and'}],
            [{ op: 'like', path: 'orderdetails.products.name', val: 'apple'}]
        ]
    }
    public complexFilter: string = JSON.stringify(this.complexFilterJson, null, 4);

    ngOnInit() {
        SwaggerUI({
            domNode: window.document.getElementById('swagger-ui-item'),
            url: 'assets/swagger/select.json'
        });
    }
}