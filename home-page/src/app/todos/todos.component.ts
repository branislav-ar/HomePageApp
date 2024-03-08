import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NotificationService } from '../shared/notifications/notification.service';
import { Todo } from '../shared/todo-shared/todo.model';
import { TodoService } from '../shared/todo-shared/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  animations: [
    trigger('todoItemAnim', [
      transition(':leave', [
        animate(1000, style({
          opacity: 0,
          height: 0,
          marginBottom: 0
        })
        )
      ]),
    ])
  ]
})

export class TodosComponent implements OnInit {

  todo$: Observable<Array<Todo>>;

  constructor(
    private todoService: TodoService,
    private router: Router,
    private notificationService: NotificationService
    ) { }

  ngOnInit(): void {
    this.todo$ = this.todoService.getTodos();
  }

  toggleCompleted(todo: Todo) {
    this.todoService.updateTodo(todo.id, !todo.completed, todo.text);
  }

  onEditClick(todo: Todo) {
    this.router.navigate(['/todos', todo.id]);
  }

  onDeleteClick(todo: Todo) {
    this.todoService.deleteTodo(todo.id);
    this.notificationService.show('Todo deleted!');
  }
}
