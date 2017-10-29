import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/do';
import { Todo, NewTodo } from '../../todos/models/todo';

const randomString = () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

let idIter = 0;
const todos: Todo[] = [
  {id: idIter++, createdDate: new Date(),
    title: `Some Todo: ${Math.random().toString(36).substring(2, 15) }`, completed: false, body: randomString()},
  {id: idIter++, createdDate: new Date(),
    title: `Another Todo: ${Math.random().toString(36).substring(2, 15) }`, completed: false, body: randomString()}
];

@Injectable()
export class TodosService {

  searchTodos(title) {
    return Observable.timer(1000).mapTo(todos);
  }

  postTodo(newTodo: NewTodo): Observable<Todo> {
    const created: Todo = {
      id: idIter++,
      createdDate: new Date(),
      title: newTodo.title,
      body: newTodo.body,
      completed: false
    };
    return Observable.timer(1000).mapTo(created);
  }

  putTodo(updated: Todo) {
    return Observable.timer(1000).mapTo(updated);
  }

}
