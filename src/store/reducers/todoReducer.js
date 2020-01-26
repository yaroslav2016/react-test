import * as actions from "../actions";

const initialState = {todos: null}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actions.ADD_TODO:
            return {...state, todos: [action.todo, ...state.todos]};
        default:
            return state;
    }
};

export default reducer