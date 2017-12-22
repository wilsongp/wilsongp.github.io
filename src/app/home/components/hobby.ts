import { Component, ChangeDetectionStrategy, Input, OnInit, HostListener, Inject, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import { Observable } from 'rxjs/Observable';

import { Hobby } from '../models/hobby';

@Component({
  selector: 'app-hobby',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div fxLayoutAlign="space-between center">
      <img [src]="hobby.imageUrl" alt="Hobby image">
      <div fxLayout="column" fxLayoutAlign="space-around center" fxFlex fxHide.lt-md="true">
          <div>
            <h3>{{hobby.title}}</h3>
            <p fxHide.lt-md="true">{{hobby.description}}</p>
          </div>
      </div>
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['../containers/hobbies/hobbies.component.scss']
})
export class HobbyComponent {
  @Input() hobby: Hobby;

}
