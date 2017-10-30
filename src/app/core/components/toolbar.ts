import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  template: `
    <div class="toolbar">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    mat-toolbar {
    }
  `]
})
export class ToolbarComponent {
  @Output() openMenu = new EventEmitter();
}
