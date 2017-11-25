import { Component, ChangeDetectionStrategy, Input, OnInit, HostListener, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Hobby } from '../models/hobby';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-hobby',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <img [src]="hobby.imageUrl" alt="Hobby image">
    <div fxLayout="column" fxLayoutAlign="space-around center" fxFlex fxHide.lt-md="true">
        <div>
          <h3>{{hobby.title}}</h3>
          <p fxHide.lt-md="true">{{hobby.description}}</p>
        </div>
    </div>
  `,
  styleUrls: ['../containers/hobbies/hobbies.component.scss']
})
export class HobbyComponent implements OnInit {
  @Input() hobby: Hobby;
  @Input()

  filterClass = false;

  constructor(@Inject(DOCUMENT) private doc: Document){}

  ngOnInit() {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
     const num = this.doc.body.scrollTop;
     if ( num > 50 ) {
     this.filterClass = true;
     } else if (this.filterClass && num < 5) {
     this.filterClass = false;
     }
  }

}
