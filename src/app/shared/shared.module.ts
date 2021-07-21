import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertComponent } from './alert/alert.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { PlaceholderDirective } from './placeholder/placeholder.directive';
import { DropdownDirective } from './dropdown.directive';

@NgModule({
    declarations: [
        AlertComponent,
        LoadingSpinnerComponent,
        PlaceholderDirective,
        DropdownDirective // can only declare components and directives once
    ],
    imports: [
        CommonModule // instead of Browser Module which can only be in 1 module
    ],
    exports: [
        AlertComponent,
        LoadingSpinnerComponent,
        PlaceholderDirective,
        DropdownDirective, 
        CommonModule
    ],
    entryComponents: [AlertComponent]  // for Angular < v9
})
export class SharedModule {}


// wherever we import the shared module, we have access to all the features initialized here because we're exporting them