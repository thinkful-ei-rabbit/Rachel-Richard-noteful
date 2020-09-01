import React from 'react';
import './App.css';
import MainPage from './MainPage';
import NotePage from './NotePage';
import FolderPage from './FolderPage';
import { Route } from 'react-router-dom';
import STORE from './STORE';
import Header from './Header';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

class App extends React.Component {
  state = {
    store: STORE,
  }
  render() {
  return (
    <div className="App">
      <Header />
      <section className='main-section'>
      <div className='sidebar'>
      <Sidebar />
      </div>
      <Route path='/' render={() => <MainPage state={this.state.store} />} />
      </section>
      <Route path='/NotePage' render={() => <NotePage state={this.state.store} />} />
      <Route path='/FolderPage' render={() => <FolderPage state={this.state.store} />}/>
    </div>
  );
  }
}

export default App;
