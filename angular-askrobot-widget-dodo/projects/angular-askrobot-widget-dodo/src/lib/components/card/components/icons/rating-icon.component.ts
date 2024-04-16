import { OnChanges, ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'rating-icon',
    template: `
        <svg [attr.width]="width" [attr.height]="height" [attr.viewBox]="viewBox" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.3422 8.33966C14.6047 7.99279 14.75 7.56779 14.75 7.1256C14.75 6.42404 14.3578 5.75997 13.7266 5.38966C13.5641 5.29434 13.379 5.24417 13.1906 5.24435H9.44375L9.5375 3.32404C9.55938 2.85997 9.39531 2.41935 9.07656 2.08341C8.92013 1.91783 8.73141 1.78609 8.52206 1.69632C8.3127 1.60656 8.08716 1.56069 7.85938 1.56153C7.04688 1.56153 6.32812 2.10841 6.1125 2.89122L4.77031 7.7506H2.75C2.47344 7.7506 2.25 7.97404 2.25 8.2506V13.9381C2.25 14.2147 2.47344 14.4381 2.75 14.4381H12.1453C12.2891 14.4381 12.4297 14.41 12.5594 14.3537C13.3031 14.0365 13.7828 13.31 13.7828 12.5037C13.7828 12.3068 13.7547 12.1131 13.6984 11.9256C13.9609 11.5787 14.1062 11.1537 14.1062 10.7115C14.1062 10.5147 14.0781 10.3209 14.0219 10.1334C14.2844 9.78654 14.4297 9.36154 14.4297 8.91935C14.4266 8.72247 14.3984 8.52716 14.3422 8.33966ZM3.375 13.3131V8.8756H4.64062V13.3131H3.375ZM13.3188 7.79747L12.9766 8.09435L13.1938 8.49122C13.2653 8.62196 13.3024 8.76875 13.3016 8.91779C13.3016 9.1756 13.1891 9.42091 12.9953 9.58966L12.6531 9.88654L12.8703 10.2834C12.9419 10.4141 12.979 10.5609 12.9781 10.71C12.9781 10.9678 12.8656 11.2131 12.6719 11.3818L12.3297 11.6787L12.5469 12.0756C12.6184 12.2063 12.6555 12.3531 12.6547 12.5022C12.6547 12.8522 12.4484 13.1678 12.1297 13.3115H5.64062V8.8256L7.19531 3.19279C7.2354 3.04841 7.32146 2.92104 7.44044 2.82997C7.55943 2.7389 7.70485 2.68909 7.85469 2.6881C7.97344 2.6881 8.09062 2.72247 8.18437 2.79279C8.33906 2.90841 8.42188 3.08341 8.4125 3.26935L8.2625 6.36935H13.175C13.4531 6.53966 13.625 6.82716 13.625 7.1256C13.625 7.38341 13.5125 7.62716 13.3188 7.79747Z" [attr.fill]="color"/>
        </svg>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class RatingIconComponent implements OnChanges {
    @Input() public color = "#fff";
    @Input() public width = "16";
    @Input() public height = "16";

    viewBox = "0 0 16 16";

    ngOnChanges() {
        this.viewBox = `0 0 ${this.width} ${this.height}`
    }
}