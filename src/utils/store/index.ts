import { createStore } from "redux";
import { MessageObject } from "../../interfaces/interfaces";

const initialState: Array<MessageObject> = []

const reducerFn = (state = initialState , action:any) => {
    if (action.type === "ADD_MESSAGE") {
        initialState.push(action.payload)
        return initialState
    }
   return state; 
}

const store = createStore(reducerFn)
export default store;