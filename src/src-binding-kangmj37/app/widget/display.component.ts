import { Component, Input } from '@angular/core';

@Component({
    selector: 'widget-display',
    templateUrl: './display.component.html',
    styleUrls: ['./display.component.css']
})
export class DisplayComponent {
    @Input() value:string = '0'
}
