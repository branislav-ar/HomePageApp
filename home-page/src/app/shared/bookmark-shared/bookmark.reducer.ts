import { Bookmark } from "./bookmark.model";
import { BookmarkAction, BookmarkActionTypes } from "./bookmarks.actions";

const initialState: Array<Bookmark> = [
    new Bookmark('Wikipedia', 'http://wikipedia.org'),
    new Bookmark('YouTube', 'http://youtube.com'),
    new Bookmark('Google', 'http://google.com')
  ]

export function BookmarkReducer(
    state: Array<Bookmark> = initialState,
    action: BookmarkAction
    ) {
        switch(action.type) {
            case BookmarkActionTypes.ADD_ITEM:
                return [...state, action.payload];
            case BookmarkActionTypes.UPDATE_ITEM:
                {
                    const bookmarkToUpdate = state.filter(item => item.id !== action.payload1_id);
                    const updatedBookmark = { ...bookmarkToUpdate, id: action.payload1_id, name: action.payload2_name, url: action.payload3_url }
                    const newState = state.map(bmk => bmk.id === updatedBookmark.id ? updatedBookmark : bmk);
                    return newState;
                }
            case BookmarkActionTypes.DELETE_ITEM:
                return state.filter(item => item.id !== action.payload);
            default: 
                return state;
        }
    }