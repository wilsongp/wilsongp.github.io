import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
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

  constructor(private store: Store<fromHome.State>) {
    this.hobbies$ = store.select(fromHome.getHobbiesEntitiesState);
    this.selectedHobby$ = store.select(fromHome.getSelectedHobby);
  }

  ngOnInit() {
    this.hobbies$.subscribe(data => {
    });
  }

  selectSlide(slideId: number) {
    this.store.dispatch(new hobbies.SelectHobby(slideId));
  }

}
