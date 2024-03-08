import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app-store.model';
import { AddTodoItemAction, DeleteTodoItemAction, UpdateTodoItemAction } from './todo.actions';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private store: Store<AppState>) {
   }

  getTodos() {
    return this.store.select(store => store.todos);
  }

  getTodo(id: string) {
    return this.store.select(store => store.todos.find(td => td.id === id));
  }

  addTodo(todo: Todo) {
    this.store.dispatch(new AddTodoItemAction(todo));
  }

  deleteTodo(id: string) {
    this.store.dispatch(new DeleteTodoItemAction(id));
  }

  updateTodo(id: string, completed: boolean, text: string) {
    this.store.dispatch(new UpdateTodoItemAction(id, completed, text));
  }
}
