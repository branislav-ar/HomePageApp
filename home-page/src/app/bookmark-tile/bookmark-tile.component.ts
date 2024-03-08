import { Component, Input, OnInit } from '@angular/core';
import { Bookmark } from '../shared/bookmark-shared/bookmark.model';

@Component({
  selector: 'app-bookmark-tile',
  templateUrl: './bookmark-tile.component.html',
  styleUrls: ['./bookmark-tile.component.css'],
})
export class BookmarkTileComponent implements OnInit {

  @Input() bookmark: Bookmark

  titleIconSrc: string
  faviconError: boolean

  constructor() { }

  ngOnInit(): void {

    const URL1 = new URL(this.bookmark.url);
    try{
      this.titleIconSrc = URL1.origin + '/favicon.ico';
    }
    catch(e) {
      console.log(e);
    }
  }

}
