import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgContentComponent } from "../ng-content/ng-content.component";

@Component({
    selector: 'app-ng-template',
    standalone: true,
    templateUrl: './ng-template.component.html',
    styleUrl: './ng-template.component.scss',
    imports: [CommonModule, NgContentComponent]
})
export class NgTemplateComponent {

}
