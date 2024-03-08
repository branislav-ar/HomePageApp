import { Action } from '@ngrx/store';
import { stringify } from 'querystring';
import { Bookmark } from './bookmark.model';

export enum BookmarkActionTypes {
    ADD_ITEM = '[BOOKMARK] Add Item',
    DELETE_ITEM = '[BOOKMARK] Delete Item',
    UPDATE_ITEM = '[BOOKMARK] Update Item'
}

//ADD
export class AddBookmarkItemAction implements Action {
    readonly type = BookmarkActionTypes.ADD_ITEM;

    constructor(public payload: Bookmark) { }
}

//DELETE
export class DeleteBookmarkItemAction implements Action {
    readonly type = BookmarkActionTypes.DELETE_ITEM;

    constructor(public payload: string) { }
}

//UPDATE
export class UpdateBookmarkItemAction implements Action {
    readonly type = BookmarkActionTypes.UPDATE_ITEM;

    constructor(public payload1_id: string, public payload2_name: string, public payload3_url: string,) { }
}

export type BookmarkAction = AddBookmarkItemAction | DeleteBookmarkItemAction | UpdateBookmarkItemAction;