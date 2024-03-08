import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Note } from '../shared/note-shared/note.model';
import { NoteService } from '../shared/note-shared/note.service';
import { NotificationService } from '../shared/notifications/notification.service';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css']
})
export class EditNoteComponent implements OnInit {

  note: Observable<Note>

  idForDisplay: string
  titleForDisplay: string
  contentForDisplay: string

  constructor(
    private route: ActivatedRoute,
    private noteService: NoteService,
    private router: Router,
    private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const idNote = paramMap.get('id');

      if(idNote)  {
        this.note = this.noteService.getNote(idNote);
        
          if(this.note) {
            this.note.subscribe(b => this.idForDisplay = b.id);
            this.note.subscribe(b => this.titleForDisplay = b.title);
            this.note.subscribe(b => this.contentForDisplay = b.content);
          }
      }
    })
  }

  onFormSubmit(form: NgForm) {
    const { title, content } = form.value;

    this.noteService.updateNote(this.idForDisplay, title, content);
    this.router.navigateByUrl("/notes");

    this.notificationService.show('Note updated!');
  }

  deleteNote() {
   this.noteService.deleteNote(this.idForDisplay);
   this.router.navigateByUrl("/notes");

   this.notificationService.show('Note deleted!')
  }

}
