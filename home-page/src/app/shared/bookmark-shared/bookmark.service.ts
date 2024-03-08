import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app-store.model';
import { Bookmark } from './bookmark.model';
import { AddBookmarkItemAction, DeleteBookmarkItemAction, UpdateBookmarkItemAction } from './bookmarks.actions';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {

  constructor(private store: Store<AppState>) { }

  getBookmarks() {
    return this.store.select(store => store.bookmarks);
  }

  getBookmark(id: string) {
    return this.store.select(store => store.bookmarks.find(b => b.id === id));
  }

  addBookmark(bookmark: Bookmark) {
    this.store.dispatch(new AddBookmarkItemAction(bookmark));
  }

  deleteBookmark(id: string) {
    this.store.dispatch(new DeleteBookmarkItemAction(id));
  }

  updateBookmark(id: string, name: string, url: string) {
    this.store.dispatch(new UpdateBookmarkItemAction(id, name, url));
  }
}

