import { Component, OnInit } from '@angular/core';
import { LoggerService } from './core/logger.service'
import { Router, NavigationExtras, ActivatedRoute} from '@angular/router';

class queryStr {
    p1: string;
    p2: string;
    p3: string;
    p4: string;
    p5: string;
    p6: string;
    p7: string;
}

@Component({
    selector: 'app-root',
    template: `
    <h2>Palette</h2>
    <ul>
        <li><a (click)="onClick(rainbowColor)">Rainbow</a></li>
        <li><a (click)="onClick(grayColor)">Gray scale</a></li>
    </ul>
    <div class="palette" *ngIf='activeColor'>
        <palette-item-component class="palette-item" [color]="submitColor.p1" (colorChange)="onChange($event, 'p1')"></palette-item-component>
        <palette-item-component class="palette-item" [color]="submitColor.p2" (colorChange)="onChange($event, 'p2')"></palette-item-component>
        <palette-item-component class="palette-item" [color]="submitColor.p3" (colorChange)="onChange($event, 'p3')"></palette-item-component>
        <palette-item-component class="palette-item" [color]="submitColor.p4" (colorChange)="onChange($event, 'p4')"></palette-item-component>
        <palette-item-component class="palette-item" [color]="submitColor.p5" (colorChange)="onChange($event, 'p5')"></palette-item-component>
        <palette-item-component class="palette-item" [color]="submitColor.p6" (colorChange)="onChange($event, 'p6')"></palette-item-component>
        <palette-item-component class="palette-item" [color]="submitColor.p7" (colorChange)="onChange($event, 'p7')"></palette-item-component>
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
    private activeColor: boolean;

    readonly rainbowColor = {
        p1: 'red', p2: 'orange', p3: 'yellow', p4: 'green', p5: 'blue', p6: 'navy', p7: 'purple'
    }

    readonly grayColor = {
        p1: '#222', p2: '#444', p3: '#666', p4: '#888', p5: '#aaa', p6: '#ccc', p7: '#eee'
    }

    submitColor = {
        p1: 'black', p2: 'black', p3: 'black', p4: 'black', p5: 'black', p6: 'black', p7: 'black'
    }

    constructor(private logger:LoggerService, private router:Router, private route:ActivatedRoute) {}

    ngOnInit() {
        //this.logger.startLoggingRouterEvent();
        this.activeColor = false;
        this.route.queryParamMap.subscribe((params) => {
            if (params.get('p1')) {
                this.activeColor = true;
                this.submitColor.p1 = params.get('p1'); 
                this.submitColor.p2 = params.get('p2'); 
                this.submitColor.p3 = params.get('p3'); 
                this.submitColor.p4 = params.get('p4'); 
                this.submitColor.p5 = params.get('p5'); 
                this.submitColor.p6 = params.get('p6'); 
                this.submitColor.p7 = params.get('p7'); 
            }
        });
    } 

    onClick(params: queryStr) {
        let navigationExtras: NavigationExtras = {
            queryParams: params
        };

        this.router.navigate(['/'], navigationExtras);
    }

    onChange($event: string, key: string) {
        console.log(`${key} was changed to ${$event}`);
    }
}