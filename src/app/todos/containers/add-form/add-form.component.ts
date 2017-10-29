import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormBuilder, FormGroup} from '@angular/forms';
import { Store } from '@ngrx/store';

import * as fromTodos from '../../reducers';
import * as todos from '../../actions/todo';
import { NewTodo } from '../../models/todo';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  newTodoForm: FormGroup;

  newTodo$: Observable<NewTodo>;
  pending$: Observable<boolean>;
  error$: Observable<string>;

  constructor(
    private store: Store<fromTodos.State>,
    private _fb: FormBuilder
  ) {
    this.newTodo$ = store.select(fromTodos.getTodosNewTodoState);
    this.pending$ = store.select(fromTodos.getTodosPendingState);
    this.error$ = store.select(fromTodos.getTodosErrorState);
   }

  ngOnInit() {
    this.newTodoForm = this._fb.group({
      title: ['', [Validators.required, Validators.minLength(1)]],
      body: ['', [Validators.minLength(3)]]
    });

    this.newTodo$.subscribe((newTodo: NewTodo) => {
      this.newTodoForm.reset(newTodo);
    });
  }

  addTodo() {
    this.store.dispatch(new todos.Add(this.newTodoForm.value));
  }

  getErrorMessage(prop: FormControl) {
    return prop.hasError('minlength') ? `Minimum length not met` :
      prop.hasError('required') ? 'You must enter a value' :
      '';
  }

  resetErrors(form: FormGroup) {
    Object.keys(form.controls).forEach(key => {
      form.controls[key].setErrors(null);
    });
  }

}
