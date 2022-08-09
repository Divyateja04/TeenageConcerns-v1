import React from 'react';
import 'tachyons';
import Particles from 'react-tsparticles';
import particlesConfig from './Config/particlesConfig';

import Home from './Pages/Home/Home.js';

import Chat from './Pages/Chat/Chat.js';

import VolunteerLogin from './Pages/Volunteer/VolunteerLogin.js';
import VolunteerRegister from './Pages/Volunteer/VolunteerRegister.js';
import VolunteerProfile from './Pages/Volunteer/VolunteerProfile.js';

import UserRegister from './Pages/User/UserRegister.js';
import UserProfile from './Pages/User/UserProfile.js';
import UserLogin from './Pages/User/UserLogin.js';

import './App.css';

//TODO
//DONE 1. Volunteer Login
//DONE 2. Volunteer Register
//DONE 3. User Register
//DONE 4. User account delete
//DONE 5. User get advisor
//DONE 6. Volunteer profile
//7. Chat

const initialState = {
  togo: 'home',
  isUser: false,
  isVolunteer: false,
  vData: {
    name: "",
    email: "",
    users: "",
    current: "",
    past: ""
  },
  uData: {
    id: "",
    advisor: ""
  },
  room: "",
}

class App extends React.Component {
  constructor(){
    super();
    this.state = initialState;
  }

  onRouteChange = (togo) => {
    if(togo === 'signout'){
      this.setState(initialState);
    }else if(togo === 'vProfile'){
      this.setState({isVolunteer: true});
    }
    this.setState({togo: togo})
  }

  chatWithUser = (room) => {
    this.setState({room: room})
    this.setState({togo: 'chat'});
  }

  loadVolunteer = (volunteer) => {
    this.setState({
      vData: volunteer
    })
    // console.log(this.state)
  }

  loadUser = (id, advisor = null) => {
    this.setState({
      uData: {
        id: id,
        advisor: advisor
      }
    })
  }

  render(){
    return (
      <div className="App">
        <div className='App-header'> 
          <div className="particles">
            <Particles height="100vh" width="100vw" params={particlesConfig} />
          </div>
          {
          (() => {
            switch(this.state.togo) {
              case 'home':
                return <Home onRouteChange={this.onRouteChange}/>;
              case 'chat':
                return <Chat onRouteChange={this.onRouteChange} username={this.state.vData.name || "Anonymous User"} room={this.state.room} isVolunteer={this.state.isVolunteer}/>;
              case 'vLogin':
                return <VolunteerLogin onRouteChange={this.onRouteChange} loadVolunteer={this.loadVolunteer}/>;
              case 'vRegister':
                return <VolunteerRegister onRouteChange={this.onRouteChange} loadVolunteer={this.loadVolunteer}/>;
              case 'vProfile':
                return <VolunteerProfile onRouteChange={this.onRouteChange} vData={this.state.vData} chatWithUser={this.chatWithUser} />;
              case 'uRegister':
                return <UserRegister onRouteChange={this.onRouteChange} loadUser={this.loadUser} />;
              case 'uLogin':
                return <UserLogin onRouteChange={this.onRouteChange} loadUser={this.loadUser} />;
              case 'uProfile':
                return <UserProfile onRouteChange={this.onRouteChange} uData={this.state.uData} chatWithUser={this.chatWithUser} />;
              case 'signout':
                return <Home onRouteChange={this.onRouteChange}/>;
            }
          }) ()
          }
        </div>
      </div>
    )
  }
}

export default App;
