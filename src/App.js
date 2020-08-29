import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Main from './components/Main';
import SocialLinks from './components/SocialLinks';

class App extends React.Component {
  render() {
    return (
      <div className="App">
          <NavBar/>
          <Main/>
          <SocialLinks/>
      </div>
    );
  }
}

export default App;
