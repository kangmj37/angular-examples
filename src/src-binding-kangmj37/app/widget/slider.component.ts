import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'widget-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.css']
})
export class SliderComponent {
    @Output() colorChange = new EventEmitter<number>(); 
}
