import React  from 'react';
import './index.scss';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import VisibilityFilters from "./VisibilityFilters";
class ReduxDemo extends React.Component {

    render(){
        return(
            <div className="todo-app">
                <AddTodo />
                <TodoList />
                <VisibilityFilters />
            </div>
        )
    }
    
}

export default ReduxDemo