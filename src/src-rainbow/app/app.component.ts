import { Component, OnInit } from '@angular/core';
import { LoggerService } from './core/logger.service'
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    template: `
    <h2>Palette</h2>
    <div>
        <a [routerLink]="[{outlets: {ro1:[rainbowColors.c1], ro2:[rainbowColors.c2], ro3:[rainbowColors.c3], ro4:[rainbowColors.c4], ro5:[rainbowColors.c5], ro6:[rainbowColors.c6], ro7:[rainbowColors.c7]}}]">Rainbow</a>
    </div>
    <div>
        <a [routerLink]="[{outlets: {ro1:[grayColors.c1], ro2:[grayColors.c2], ro3:[grayColors.c3], ro4:[grayColors.c4], ro5:[grayColors.c5], ro6:[grayColors.c6], ro7:[grayColors.c7]}}]">Gray Scale</a>
    </div>
    <div>
    <table>
        <tr>
            <td>
    <router-outlet name='ro1'></router-outlet>
            </td>
            <td>
    <router-outlet name='ro2'></router-outlet>
            </td>
            <td>
    <router-outlet name='ro3'></router-outlet>
            </td>
            <td>
    <router-outlet name='ro4'></router-outlet>
            </td>
            <td>
    <router-outlet name='ro5'></router-outlet>
            </td>
            <td>
    <router-outlet name='ro6'></router-outlet>
            </td>
            <td>
    <router-outlet name='ro7'></router-outlet>
            </td>
        </tr>
    </table>
    </div>
    `,
    styles: [
    `
    `
    ]
})
export class AppComponent implements OnInit { 
    rainbowColors = {
        c1: 'red',
        c2: 'orange',
        c3: 'yellow',
        c4: 'green',
        c5: 'blue',
        c6: 'navy',
        c7: 'purple',
    };
    
    grayColors = {
        c1: '#222',
        c2: '#444',
        c3: '#666',
        c4: '#888',
        c5: '#aaa',
        c6: '#ccc',
        c7: '#eee',
    };
    
    constructor(private logger:LoggerService, private router:Router) {}

    ngOnInit() {
        this.logger.startLoggingRouterEvent();
    } 
}