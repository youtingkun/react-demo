
export const getTodoList = (store) =>{
   return store.todos ? store.todos.allIds : [];
}
 

export const getTodoById = (store, id) =>{
   return store.todos ? { ...store.todos.byIds[id], id } : {};
}

// 处理成自己想要的数据格式
export const getTodos = store =>{
    return getTodoList(store).map(id => getTodoById(store, id));
}
  

export const getTodosByVisibilityFilter = (store, visibilityFilter) => {
  const allTodos = getTodos(store);
  switch (visibilityFilter) {
    case 'completed':
      return allTodos.filter(todo => todo.completed);
    case 'incomplete':
      return allTodos.filter(todo => !todo.completed);
    case 'all':
    default:
      return allTodos;
  }
};
