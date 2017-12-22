import { Component, OnInit, ChangeDetectionStrategy, Input, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { Observable, } from 'rxjs/Observable';

import * as fromHome from '../../reducers';
import * as hobbies from '../../actions/hobby';
import { Hobby } from '../../models/hobby';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss']
})
export class HobbiesComponent implements OnInit {
  hobbies$: Observable<Hobby[]>;
  selectedHobby$: Observable<Hobby>;

  filterClass = false;

  constructor(
    private store: Store<fromHome.State>,
    @Inject(DOCUMENT) private doc: Document
  ) {
    this.hobbies$ = store.select(fromHome.getHobbiesEntitiesState);
    this.selectedHobby$ = store.select(fromHome.getSelectedHobby);
  }

  ngOnInit() {
    this.hobbies$.subscribe(data => {
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
     const num = this.doc.body.scrollTop;
     console.log(num)
     if ( num > 50 ) {
     this.filterClass = true;
     } else if (this.filterClass && num < 5) {
     this.filterClass = false;
     }
  }

  selectSlide(slideId: number) {
    this.store.dispatch(new hobbies.SelectHobby(slideId));
  }

}
