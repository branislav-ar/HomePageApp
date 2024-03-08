import { Todo } from "./todo.model";
import { TodoAction, TodoActionTypes } from "./todo.actions";

const initialState: Array<Todo> = [
    new Todo("Go to the shoping market to get chicken."),
    new Todo("Update your id card information at 'www.idcardinfo.com'."),
    new Todo("Download the needed extensions.")
  ]

export function TodoReducer(
    state: Array<Todo> = initialState,
    action: TodoAction
    ) {
        switch(action.type) {
            case TodoActionTypes.ADD_ITEM:
                return [...state, action.payload];
            case TodoActionTypes.UPDATE_ITEM:
                {
                    const todoToUpdate = state.filter(item => item.id !== action.payload1_id);
                    const updatedTodo = { ...todoToUpdate, id: action.payload1_id, completed: action.payload2_completed, text: action.payload3_text }
                    const newState = state.map(todo => todo.id === updatedTodo.id ? updatedTodo : todo);
                    return newState;
                }
            case TodoActionTypes.DELETE_ITEM:
                return state.filter(item => item.id !== action.payload);
            default: 
                return state;
        }
    }