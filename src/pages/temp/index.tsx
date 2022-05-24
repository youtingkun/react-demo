import React from "react";
import { Link } from "react-router-dom";
interface IProps {}
type HomeProps = IProps;
interface IState {}

class Temp extends React.Component<HomeProps, IState> {
  constructor(props: HomeProps) {
    super(props);
  }
  state = {
    count: 1,
  };
  componentDidMount() {
    enum Color {
      Red = 1,
      Green = 2,
      Blue = 4,
    }
    let colorName: string = Color[2];
    console.log("colorName, Color.Red", Color[4], Color.Red);
    const btnEle = document.getElementById("btn");
    if (btnEle) {
      btnEle && btnEle.addEventListener("click", this.handleClick);
    }
  }
  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
    console.log(this.state.count); // 2

    this.setState({
      count: this.state.count + 1,
    });
    console.log(this.state.count); // 3

    this.setState({
      count: this.state.count + 1,
    });
    console.log(this.state.count); // 4,count最终为4
  };

  render() {
    return (
      <>
        <button id="btn">触发原生事件</button>
        <div>{this.state.count}</div>
      </>
    );
  }
}

export default Temp;
