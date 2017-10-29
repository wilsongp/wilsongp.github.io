import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromTodos from '../../reducers';
import * as todos from '../../actions/todo';
import { Observable } from 'rxjs/Observable';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {
  todos$: Observable<Todo[]>;
  pending$: Observable<boolean>;
  error$: Observable<string>;

  constructor(private store: Store<fromTodos.State>) {
    this.todos$ = store.select(fromTodos.getTodosEntitiesState);
    this.pending$ = store.select(fromTodos.getTodosPendingState);
    this.error$ = store.select(fromTodos.getTodosErrorState);
    this.store.dispatch(new todos.Search(null));
  }

  ngOnInit() {
  }

}
