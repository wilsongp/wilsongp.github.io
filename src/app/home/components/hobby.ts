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
    <div [@scrollAnimation]="state" fxLayoutAlign="space-between center">
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
  styleUrls: ['../containers/hobbies/hobbies.component.scss'],
  animations: [
      trigger('scrollAnimation', [
        state('dim', style({
          filter: "brightness(.5)",
          "z-index": 3
        })),
        state('brighten',   style({
          filter: "brightness(1)",
          "z-index": 1
        })),
        transition('dim => brighten', animate('700ms ease-out')),
        transition('brighten => dim', animate('700ms ease-in'))
      ])
  ]
})
export class HobbyComponent {
  @Input() hobby: Hobby;

  state = 'brighten';
  filterClass = false;

  constructor(public el: ElementRef) { }

    @HostListener('window:scroll', ['$event'])
      checkScroll() {
        const thisHeight = this.el.nativeElement.offsetHeight;
        const componentPosition = this.el.nativeElement.offsetTop;
        const scrollPosition = window.pageYOffset;

        console.log(thisHeight, componentPosition, scrollPosition);

        if (scrollPosition + thisHeight >= componentPosition) {
          this.state = 'dim';
        } else {
          this.state = 'brighten';
        }

  }

}
