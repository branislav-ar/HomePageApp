import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app-store.model';
import { AddNoteItemAction, DeleteNoteItemAction, UpdateNoteItemAction } from './note.actions';
import { Note } from './note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private store: Store<AppState>) {}

  getNotes() {
    return this.store.select(store => store.notes);
  }

  getNote(id: string) {
    return this.store.select(store => store.notes.find(nt => nt.id === id));
  }

  addNote(note: Note) {
    this.store.dispatch(new AddNoteItemAction(note));
  }

  updateNote(id: string, title: string, content: string) {
    this.store.dispatch(new UpdateNoteItemAction(id, title, content));
  }

  deleteNote(id: string) {
    this.store.dispatch(new DeleteNoteItemAction(id));
  }
}
