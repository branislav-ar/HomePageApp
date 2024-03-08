import { Action } from '@ngrx/store';
import { stringify } from 'querystring';
import { Note } from './note.model';

export enum NoteActionTypes {
    ADD_ITEM = '[NOTE] Add Item',
    DELETE_ITEM = '[NOTE] Delete Item',
    UPDATE_ITEM = '[NOTE] Update Item'
}

//ADD
export class AddNoteItemAction implements Action {
    readonly type = NoteActionTypes.ADD_ITEM;

    constructor(public payload: Note) { }
}

//DELETE
export class DeleteNoteItemAction implements Action {
    readonly type = NoteActionTypes.DELETE_ITEM;

    constructor(public payload: string) { }
}

//UPDATE
export class UpdateNoteItemAction implements Action {
    readonly type = NoteActionTypes.UPDATE_ITEM;

    constructor(public payload1_id: string, public payload2_title: string, public payload3_content: string,) { }
}

export type NoteAction = AddNoteItemAction | DeleteNoteItemAction | UpdateNoteItemAction;