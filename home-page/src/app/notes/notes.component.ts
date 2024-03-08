import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../shared/note-shared/note.model';
import { NoteService } from '../shared/note-shared/note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  note$: Observable<Array<Note>>;

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.note$ = this.noteService.getNotes();
  }

}
