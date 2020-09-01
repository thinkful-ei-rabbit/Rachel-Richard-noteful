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
    
      <div className='sidebar'>
      <Sidebar folders={this.state.store.folders}/>
      </div>



      <Route exact path='/' render={() => <MainPage state={this.state.store} />} />
   
      <Route path='/NotePage/:noteId' render={(props) => <NotePage state={this.state.store} {...props} /> } />
      <Route path='/FolderPage/:idx' render={() => <FolderPage state={this.state.store} />}/>
    </div>
  );
  }
}

export default App;
