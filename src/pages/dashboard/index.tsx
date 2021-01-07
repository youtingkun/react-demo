import React from 'react';
import { RouteComponentProps} from 'react-router-dom'
interface IProps {
}
type HomeProps = IProps & RouteComponentProps;

class Dashboard extends React.Component<HomeProps>{
    
    componentDidMount(){
        //地址栏跳转传参
        console.log(this.props.match.params);

        //函数跳转传参
        console.log(this.props.history.location.state);
    }
    render(){
      
        return(
            <div>Dashboard
              <div></div>
            </div>
        )
    }
}

export default Dashboard