import React from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import {Login} from './components/Login';
import {MainView} from './components/MainView';

class App extends React.Component {

  constructor(props) {
      super(props);
      const LoginView = () => (
          <Login handleSignIn={this.handleSignIn}/>
      );
    
      const Main = () => (
          <MainView/>
      );
      this.state = {loginView: LoginView,main: Main,isLoggedIn:false}
      this.handleSignIn=this.handleSignIn.bind(this);
      localStorage.setItem('email', "juan@mail.com");
      localStorage.setItem('name', "juan Ospina");
      localStorage.setItem('password', "123");
      if (!localStorage.getItem("isLoggedIn")){
          localStorage.setItem("isLoggedIn",this.state.isLoggedIn);
      }
  }

  handleSignIn(){
      this.setState({isLoggedIn:true})
  }

  render() {
      const LoginView = this.state.loginView;
      const Main = this.state.main;
      const isLoggedIn = this.state.isLoggedIn || (localStorage.getItem("isLoggedIn") == "true" );
      let choose;
      if (!isLoggedIn){
          choose = (
              <div>
                  <ul>
                      <li><Link to="/">Login</Link></li>
                  </ul>
                  <div>
                      <Route exact path="/" component={LoginView}/>
                  </div>
              </div>

          );       
      }else {
          choose = (
              <div>
                  <ul>
                      <li><Link to="/Main">Main</Link></li>
                  </ul>
                  <div>
                       <Route path="/Main" component={Main}/>
                  </div>
              </div>

          );    

      }

      return (
          
          <Router>
              <div className="App">

                  {choose}
              </div>
          </Router>
      );
  }

  
}

export default App;