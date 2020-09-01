import React from 'react';
import './App.css';
import MainPage from './MainPage';
import NotePage from './NotePage';
import FolderPage from './FolderPage';
import { Route } from 'react-router-dom'
import STORE from './STORE'

class App extends React.Component {
  state = {
    store: STORE,
    name: 'hello',
  }
  render() {
  return (
    <div className="App">
      App.js
      <Route  path='/' component={MainPage} />
      <Route path='/NotePage' render={() => <NotePage state={this.state.store} />}/>
      <Route path='/FolderPage' render={() => <FolderPage state={this.state.store} />}/>
    </div>
  );
  }
}

export default App;
