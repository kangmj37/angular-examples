import { Component, OnInit } from '@angular/core';
import { LoggerService } from './core/logger.service'
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    template: `
    <h2>Palette</h2>
<<<<<<< HEAD
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
=======
    <ul>
        <li><a [routerLink]="[{outlets: rainbow}]">Rainbow</a></li>
        <li><a [routerLink]="[{outlets: grayscale}]">Gray scale</a></li>
    </ul>
    <div class="palette">
        <input class="palette-item" (change)="onChange('p1', $event)" placeholder="color"/>
        <input class="palette-item" (change)="onChange('p2', $event)" placeholder="color"/>
        <input class="palette-item" (change)="onChange('p3', $event)" placeholder="color"/>
        <input class="palette-item" (change)="onChange('p4', $event)" placeholder="color"/>
        <input class="palette-item" (change)="onChange('p5', $event)" placeholder="color"/>
        <input class="palette-item" (change)="onChange('p6', $event)" placeholder="color"/>
        <input class="palette-item" (change)="onChange('p7', $event)" placeholder="color"/>
    </div>
    <div class="palette">
        <div class="palette-item"><router-outlet name="p1"></router-outlet></div>
        <div class="palette-item"><router-outlet name="p2"></router-outlet></div>
        <div class="palette-item"><router-outlet name="p3"></router-outlet></div>
        <div class="palette-item"><router-outlet name="p4"></router-outlet></div>
        <div class="palette-item"><router-outlet name="p5"></router-outlet></div>
        <div class="palette-item"><router-outlet name="p6"></router-outlet></div>
        <div class="palette-item"><router-outlet name="p7"></router-outlet></div>
>>>>>>> d6cbf9957cd0649003f8a1c0503cf68db04d7537
    </div>
    `,
    styles: [
    `
        .palette {
            display: flex;
        }
        .palette-item {
            display: inline-block;
        }
        input.palette-item {
            padding: 0;
            border: 1px solid #ccc;
            width: 98px;
        }
    `
    ]
})
export class AppComponent implements OnInit { 
<<<<<<< HEAD
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
    
=======
    readonly rainbow = {
        p1: 'red',
        p2: 'orange',
        p3: 'yellow',
        p4: 'green',
        p5: 'blue',
        p6: 'navy',
        p7: 'purple'
    }

    readonly grayscale = {
        p1: '#222',
        p2: '#444',
        p3: '#666',
        p4: '#888',
        p5: '#aaa',
        p6: '#ccc',
        p7: '#eee'
    }

>>>>>>> d6cbf9957cd0649003f8a1c0503cf68db04d7537
    constructor(private logger:LoggerService, private router:Router) {}

    ngOnInit() {
        this.logger.startLoggingRouterEvent();
    } 

    onChange(outlet:string, event:Event) {
        let value = (event.target as HTMLInputElement).value;
        console.log(`outlet = ${outlet}, background = ${value}`);
        let outlets:{
            [outlet:string]:string;
        } = {};
        outlets[outlet] = value;
        this.router.navigate([{outlets: outlets}]);
    }
}