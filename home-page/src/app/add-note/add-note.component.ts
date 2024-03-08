import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Note } from '../shared/note-shared/note.model';
import { NoteService } from '../shared/note-shared/note.service';
import { NotificationService } from '../shared/notifications/notification.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {

  showValidationErrors: boolean;

  constructor(
    private noteService: NoteService,
    private router: Router,
    private notificationService: NotificationService
    ) { }

  ngOnInit(): void {
  }

  onFormSubmit(form: NgForm) {
    /* required u form postavlja status: INVALID ako nema naslova! */
    if (form.invalid)
      return this.showValidationErrors = true;
    /* alert("Form invalid! ❌"); */
    
    const note = new Note(form.value.title, form.value.content);
    console.log(note);

    this.noteService.addNote(note);
    this.router.navigateByUrl("/notes");

    this.notificationService.show('Note created!');
    
    return null;
  }

}
