import { NgModule } from '@angular/core';

import { StepperComponent } from './stepper.component';
import { SliderComponent } from './slider.component';
import { DisplayComponent } from './display.component';

@NgModule({
    imports: [],
    exports: [StepperComponent, SliderComponent, DisplayComponent],
    declarations: [StepperComponent, SliderComponent, DisplayComponent],
    providers: [],
})
export class WidgetModule { }
