export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const SET_FILTER = "SET_FILTER";

let nextTodoId = 0;

export function addTodo(content:any){
    return {
        type: ADD_TODO,
        payload: {
          id: ++nextTodoId,
          content
        }
    }
  
};

export function toggleTodo(id:any){
    return {
        type: TOGGLE_TODO,
        payload: { id }
    }
  
};

export function setFilter(filter:any){
    return { type: SET_FILTER, payload: { filter } }
};

export function asyncAddTodo(content:any){
    return (dispatch:any) => {
        setTimeout(() => {
          dispatch(addTodo(content));
        }, 5000);
      }
}
