import { Component, Input } from "@angular/core";

@Component({
    selector: "image-loading",
    templateUrl: "./image-loading.component.html"
})

export class ImageLoadingComponent {
    imageLoading: boolean = true
    @Input() imageWidth: Number;
    @Input() imageUrl: string;
    @Input() imageTitle: string;
}