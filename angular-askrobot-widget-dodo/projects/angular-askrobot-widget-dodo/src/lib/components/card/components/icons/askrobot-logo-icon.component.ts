
import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';

@Component({
    selector: 'askrobot-logo-icon',
    template: `
        <svg [attr.width]="width" [attr.height]="height" [attr.viewBox]="viewBox" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.12022 0C2.74012 0 0 2.74012 0 6.12022V9.87978C0 13.2599 2.74012 16 6.12022 16H14.4262C15.2954 16 16 15.2954 16 14.4262V6.12022C16 2.74012 13.2599 0 9.87978 0H6.12022ZM9.61749 3.75956H6.38251C4.9339 3.75956 3.75956 4.9339 3.75956 6.38251V9.61749C3.75956 11.0661 4.9339 12.2404 6.38251 12.2404H12.2404V6.38251C12.2404 4.9339 11.0661 3.75956 9.61749 3.75956Z" [attr.fill]="color" />
        </svg>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class AskrobotLogoIconComponent implements OnChanges {
    @Input() public color = "#fff";
    @Input() public width = "16";
    @Input() public height = "16";

    viewBox = "0 0 16 16";

    ngOnChanges() {
        this.viewBox = `0 0 ${this.width} ${this.height}`
    }
}