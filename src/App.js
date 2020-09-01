import React from 'react';
import './App.css';
import MainPage from './MainPage';
import NotePage from './NotePage';
import FolderPage from './FolderPage';
import { Route } from 'react-router-dom';
import STORE from './STORE';
import Header from './Header';
import { Link } from 'react-router-dom';

class App extends React.Component {
  state = {
    store: STORE,
  }
  render() {
  return (
    <div className="App">
      <Header />
      <Route path='/' render={() => <MainPage state={this.state.store} />} />
      <Route path='/NotePage' render={() => <NotePage state={this.state.store} />} />
      <Route path='/FolderPage' render={() => <FolderPage state={this.state.store} />}/>
    </div>
  );
  }
}

export default App;
