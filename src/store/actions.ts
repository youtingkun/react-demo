export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const SET_FILTER = "SET_FILTER";

let nextTodoId = 0;

export const addTodo = (content:any) => {
    return {
        type: ADD_TODO,
        payload: {
          id: ++nextTodoId,
          content
        }
    }
  
};

export const toggleTodo = (id:any) => ({
  type: TOGGLE_TODO,
  payload: { id }
});

export const setFilter = (filter:any) => ({ 
    type: SET_FILTER, payload: { filter } });