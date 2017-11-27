import { NgModule } from '@angular/core';

import { StepperComponent } from './stepper.component';
import { DisplayComponent } from './display.component';

@NgModule({
    imports: [],
    exports: [StepperComponent, DisplayComponent],
    declarations: [StepperComponent, DisplayComponent],
    providers: [],
})
export class WidgetModule { }
