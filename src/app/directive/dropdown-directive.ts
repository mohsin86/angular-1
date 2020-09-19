import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective {
    @HostBinding() isOpen = false;
    constructor() {}

    @HostListener('click') isToogle(): void {
        this.isOpen = !this.isOpen;
    }

}
