// import { createStore } from "redux";
import { createAction,configureStore,createReducer,createSlice } from "@reduxjs/toolkit";

// const ADD = "ADD";
// const DELETE = "DELETE";

// const addToDo = text => {
//     return {
//         type: ADD,
//         text 
//     };
// }

// const deleteToDo = id => {
//     return { 
//         type: DELETE,
//         id: parseInt(id)
//     };
// }

//createAction
// const addToDo = createAction("ADD");
// const deleteToDo = createAction("DELETE");

// const reducer = (state = [], action) => {
//     switch(action.type) {
//         case ADD:
//             return [...state, { text: action.text, id: Date.now()}];
//         case DELETE:
//             return state.filter(toDo => toDo.id !== action.id);
//         default:
//             return state;
//     }
// };

//createAciton
// const reducer = (state = [], action) => {
//     switch(action.type) {
//         case addToDo.type:
//             return [...state, { text: action.payload, id: Date.now()}];
//         case deleteToDo.type:
//             return state.filter(toDo => toDo.id !== action.payload);
//         default:
//             return state;
//     }
// };

// //createReducer
// const reducer = createReducer([], {
//     [addToDo]: (state, action) => {
//         state.push({ text: action.payload, id: Date.now()})
//     },
//     [deleteToDo]: (state, action) => 
//         state.filter(toDo => toDo.id !== action.payload)
// })
const toDos = createSlice({
    name: 'toDosReducer',
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push({ text: action.payload, id: Date.now()})
        },
        remove: (state, action) => 
            state.filter(toDo => toDo.id !== action.payload)
    }
})

const store = configureStore({reducer: toDos.reducer});

// export const actionCreators = {
//     addToDo,
//     deleteToDo
// }
export const { add, remove } = toDos.actions;

export default store;