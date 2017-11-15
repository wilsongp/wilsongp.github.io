import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  template: `
    <nav class="navbar sticky-top navbar-expand-sm navbar-dark bg-dark">
      <a  class="navbar-brand" href="#">Contact Me: </a>
      <button class="navbar-toggler" type="button" aria-expanded="false" (click)="toggleMenu.emit()">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText" [ngbCollapse]="!isCollapsed">
        <ng-content></ng-content>
      </div>
    </nav>
  `,
  styles: [`
    mat-toolbar {
    }
  `]
})
export class ToolbarComponent {
  @Output() toggleMenu = new EventEmitter();
  @Input() isCollapsed = false;
}
