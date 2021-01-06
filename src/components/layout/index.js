import React from 'react';
import './index.scss'
import { Link } from 'react-router-dom'

class Layout extends React.Component{
    render(){
        return(
            <div className='main'>
            <div className='left'></div>
            <div className='right'>
                <div className='nav'></div>
                {this.props.children}
            </div>
            </div>
        )
    }
}

export default Layout