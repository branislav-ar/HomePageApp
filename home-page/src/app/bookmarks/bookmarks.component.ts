import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../app-store.model';
import { Bookmark } from '../shared/bookmark-shared/bookmark.model';
import { BookmarkService } from '../shared/bookmark-shared/bookmark.service';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})

export class BookmarksComponent implements OnInit {

  bookmark$: Observable<Array<Bookmark>>;

  constructor(private bookmarkService: BookmarkService) { }

  ngOnInit(): void {
    this.bookmark$ = this.bookmarkService.getBookmarks();
  }

}
