import { Bookmark } from "./shared/bookmark-shared/bookmark.model";
import { Note } from "./shared/note-shared/note.model";
import { Todo } from "./shared/todo-shared/todo.model";

export interface AppState {
    readonly bookmarks: Array<Bookmark>,
    readonly todos: Array<Todo>,
    readonly notes: Array<Note>,
};