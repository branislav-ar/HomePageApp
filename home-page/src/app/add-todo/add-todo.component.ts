import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from '../shared/notifications/notification.service';
import { Todo } from '../shared/todo-shared/todo.model';
import { TodoService } from '../shared/todo-shared/todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  showValidationErrors: boolean;

  constructor(
    private todoService: TodoService,
    private router: Router,
    private notificationService: NotificationService) { }

  ngOnInit(): void {
  }

  onFormSubmit(form: NgForm) {
    /* required u form postavlja status: INVALID ako nema naslova! */
    if (form.invalid)
      return this.showValidationErrors = true;
    /* alert("Form invalid! ❌"); */
    
    const todo1 = new Todo(form.value.text);
    this.todoService.addTodo(todo1);

    this.router.navigateByUrl("/todos");

    this.notificationService.show('Todo created!');

    return null;

  }

 

}
