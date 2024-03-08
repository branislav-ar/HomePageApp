import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Bookmark } from '../shared/bookmark-shared/bookmark.model';
import { BookmarkService } from '../shared/bookmark-shared/bookmark.service';
import { NotificationService } from '../shared/notifications/notification.service';

@Component({
  selector: 'app-edit-bookmark',
  templateUrl: './edit-bookmark.component.html',
  styleUrls: ['./edit-bookmark.component.css']
})

export class EditBookmarkComponent implements OnInit {

  bookmark: Observable<Bookmark>

  idForDisplay: string
  nameForDisplay: string
  urlForDisplay: string

  constructor(
    private bookmarkService: BookmarkService, 
    private route: ActivatedRoute,
    private router: Router,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const idBookmark = paramMap.get('id');

      if(idBookmark)  {
        this.bookmark = this.bookmarkService.getBookmark(idBookmark);
        
          if(this.bookmark) {
            this.bookmark.subscribe(b => this.idForDisplay = b.id);
            this.bookmark.subscribe(b => this.nameForDisplay = b.name);
            this.bookmark.subscribe(b => this.urlForDisplay = b.url.toString());
          }
      }
    })
  }

  onFormSubmit(form: NgForm) {
    const { name, url } = form.value;
      
    this.bookmarkService.updateBookmark(this.idForDisplay, name, url);

    this.notificationService.show("Bookmark updated!");
    this.router.navigate(['../../'], { relativeTo: this.route });
  }

  delete() {
    this.bookmarkService.deleteBookmark(this.idForDisplay);
    this.router.navigate(['../../'], { relativeTo: this.route });
  
    this.notificationService.show("Bookmark deleted!");
  }
}
