import { combineReducers } from "redux";
import { filterReducer } from "./filterReducer";
import { todoReducer } from "./todoReducer";



export const rootReducer = combineReducers(
    {
        // state name : reducer that will control it
        todosState: todoReducer,
        filterState: filterReducer
        // ... add more states and reducer to include them in the store
    }
)