import React from 'react';
import logo from './logo.svg';
import './App.css';
import {HashRouter ,Route,Switch,Redirect } from 'react-router-dom'
import Login from './pages/login/index';
import Home from './pages/home/index';
import Dashboard from './pages/dashboard/index'
import Layout from './components/layout/index'
import NotFind from './pages/404/index';
import ReduxDemo from './pages/redux-demo/index'


function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
      <HashRouter>
          <Switch>
            <Route path="/login" exact component={Login}></Route>
            <Route path="/404" exact component={NotFind}></Route>
            <Route path='/'  >
                <Layout>
                    <Switch>
                        <Route path='/index' exact component={Dashboard}></Route>
                        <Route path='/index/:name' exact component={Dashboard}></Route>
                        <Route path="/home"  component={Home}></Route>
                        <Route path='/redux' component={ReduxDemo}></Route>
                        <Redirect from="*" to="/redux" />
                    </Switch>
                </Layout>
            </Route>
            
          </Switch>
      </HashRouter>
  );
}

export default App;
