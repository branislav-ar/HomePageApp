import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Bookmark } from '../shared/bookmark-shared/bookmark.model';
import { BookmarkService } from '../shared/bookmark-shared/bookmark.service';

@Component({
  selector: 'app-manage-bookmarks',
  templateUrl: './manage-bookmarks.component.html',
  styleUrls: ['./manage-bookmarks.component.css']
})
export class ManageBookmarksComponent implements OnInit {

  bookmark$: Observable<Array<Bookmark>>;
  toggleIcon: boolean = true;

  constructor(private bookmarkService: BookmarkService) { }

  ngOnInit(): void {
    this.bookmark$ = this.bookmarkService.getBookmarks();
  }

  toggleIconFalse()
  {
    this.toggleIcon = false;
  }

}
