import React from "react";
import { connect } from "react-redux";
import { addTodo, asyncAddTodo } from "../../store/actions";
import {Button} from 'antd'



class AddTodo extends React.Component<any,any> {
  constructor(props:any) {
    super(props);
    this.state = { input: "" };
  }

  updateInput = (input:any) => {
    this.setState({ input });
  };

  handleAddTodo = () => {
    this.props.addTodo(this.state.input);
    this.setState({ input: "" });
  };
  handleAsyncAction=()=>{
    this.props.asyncAddTodo(this.state.input);
    this.setState({ input: "" });
  }

  render() {
    return (
      <div>
          <div>{this.props.activeFilter}</div>
        <input
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
        />
        <Button className="add-todo" onClick={this.handleAddTodo}>
          Add Todo
        </Button>
        <Button onClick={this.handleAsyncAction}>async action</Button>
      </div>
    );
  }
}

const mapStateToProps = (state:any) => {
    return { activeFilter: state.visibilityFilter };
  };

export default connect(
    mapStateToProps,
  { addTodo,asyncAddTodo }
)(AddTodo);
// export default AddTodo;
