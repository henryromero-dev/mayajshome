import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
    selector: 'maya-menu',
    standalone: true,
    imports: [RouterModule],
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.scss'
})
export class MenuComponent {
    constructor(private router: Router) {}

    get isHome(): boolean {
        console.log(this.router.url);
        return this.router.url === '/';
    }
}
