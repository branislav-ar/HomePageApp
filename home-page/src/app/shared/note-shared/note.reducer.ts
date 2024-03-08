import { Note } from './note.model';
import { NoteAction, NoteActionTypes } from "./note.actions";

const initialState: Array<Note> = [
    new Note("The night note", "Then came the night of the first falling star. It was seen early in the morning, rushing over Winchester eastward, a line of flame high in the atmosphere. Hundreds must have seen it and taken it for an ordinary falling star. It seemed that it fell to earth about one hundred miles east of him."),
    new Note("Sometimes note", "Sometimes it's just better not to be seen. That's how Harry had always lived his life. He prided himself as being the fly on the wall and the fae that blended into the crowd. That's why he was so shocked that she noticed him.")
  ]

export function NoteReducer(
    state: Array<Note> = initialState,
    action: NoteAction
    ) {
        switch(action.type) {
            case NoteActionTypes.ADD_ITEM:
                return [...state, action.payload];
            case NoteActionTypes.UPDATE_ITEM:
                {
                    const noteToUpdate = state.filter(item => item.id !== action.payload1_id);
                    const updatedNote = { ...noteToUpdate, id: action.payload1_id, title: action.payload2_title, content: action.payload3_content }
                    const newState = state.map(note => note.id === updatedNote.id ? updatedNote : note);
                    return newState;
                }
            case NoteActionTypes.DELETE_ITEM:
                return state.filter(item => item.id !== action.payload);
            default: 
                return state;
        }
    }