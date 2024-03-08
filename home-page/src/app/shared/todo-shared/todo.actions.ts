import { Action } from '@ngrx/store';
import { Todo } from "./todo.model";

export enum TodoActionTypes {
    ADD_ITEM = '[TODO] Add Item',
    DELETE_ITEM = '[TODO] Delete Item',
    UPDATE_ITEM = '[TODO] Update Item',
    TOGGLE_COMPLETED = '[TODO] Completed Toggle Item'
}

//ADD
export class AddTodoItemAction implements Action {
    readonly type = TodoActionTypes.ADD_ITEM;

    constructor(public payload: Todo) { }
}

//DELETE
export class DeleteTodoItemAction implements Action {
    readonly type = TodoActionTypes.DELETE_ITEM;

    constructor(public payload: string) { }
}

//UPDATE
export class UpdateTodoItemAction implements Action {
    readonly type = TodoActionTypes.UPDATE_ITEM;

    constructor(public payload1_id: string, public payload2_completed: boolean, public payload3_text: string) { }
}

export type TodoAction = AddTodoItemAction | DeleteTodoItemAction | UpdateTodoItemAction;