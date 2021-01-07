import React from 'react';
import { Link,withRouter,RouteComponentProps} from 'react-router-dom'
interface IProps {}
type HomeProps = IProps & RouteComponentProps;
interface IState {}

class Home extends React.Component<HomeProps, IState>{
    constructor(props: HomeProps) {
        super(props);
      }
    onParamsRouter(){
        const name = "params传参"
        // 这种方式必须要设置对应的路由参数
        this.props.history.push({pathname:'/index/' + name })
    }
    
    onStateRouter(){
        this.props.history.push({pathname:'/index',state:{name:'state传参'}})
    }
   
    render(){
        return(
            <div>
                <div>Home </div>
                <Link to='/index'>跳转到dashboard</Link>
                <button onClick={this.onParamsRouter.bind(this)}>params传参</button>
                <button onClick={this.onStateRouter.bind(this)}>state传参</button>
            </div>
        )
    }
}

export default withRouter(Home)