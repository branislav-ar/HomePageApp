import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ParamMap, Router } from '@angular/router';

import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { NotificationService } from '../shared/notifications/notification.service';
import { Todo } from '../shared/todo-shared/todo.model';
import { TodoService } from '../shared/todo-shared/todo.service';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {

  todo: Observable<Todo>

  idForDisplay: string
  completedForDisplay: boolean
  textForDisplay: string

  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute,
    private router: Router,
    private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const idParam = paramMap.get('id');

      if(idParam)  {
        this.todo = this.todoService.getTodo(idParam);
        
          if(this.todo) {
            this.todo.subscribe(b => this.idForDisplay = b.id);
            this.todo.subscribe(b => this.completedForDisplay = b.completed);
            this.todo.subscribe(b => this.textForDisplay = b.text);
          }
      }
    })
  }

  onFormSubmit(form: NgForm) {
    if(form.valid) {
      const { completed, text } = form.value;

      this.todoService.updateTodo(this.idForDisplay, completed, text);
      this.router.navigateByUrl("/todos");

      this.notificationService.show('Todo updated!');
    }
  }
}
