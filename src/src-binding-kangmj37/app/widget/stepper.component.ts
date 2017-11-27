import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'widget-stepper',
    templateUrl: './stepper.component.html',
    styleUrls: ['./stepper.component.css'],
})

export class StepperComponent {
    @Input() value:number = 0
    @Output() colorChange = new EventEmitter<number>();

    add(cnt:number) {
        this.value += cnt;
        this.colorChange.emit(this.value)
    }
}
