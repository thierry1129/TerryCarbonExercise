import React, { Component } from 'react';
import './app.scss';
import Header from './components/Header'
import {Theme, Content} from '@carbon/react';
import LandingPage from './content/LandingPage';

class App extends Component {
  render() {
    return (
      <>
        <Theme theme="g100">
          <Header/>
        </Theme>
        <Content>
          <LandingPage />
        </Content>
      </>
    );
  }
}

export default App;
