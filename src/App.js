import React from "react";
import "./App.css";
import MainPage from "./MainPage";
import NotePage from "./NotePage";
import FolderPage from "./FolderPage";
import { Route } from "react-router-dom";
import STORE from "./STORE";
import Header from "./Header";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

class App extends React.Component {
  state = {
    store: STORE,
  };
  render() {
    return (
      <div className="App">
       {/*  <div className="sidebar">
          <Sidebar folders={this.state.store.folders} />
        </div> */}
        <div className="main-bar">
          <Header />
          <section className="main-notes">
              <Route
                exact
                path="/"
                render={() => <MainPage state={this.state.store} />}
              />

              <Route
                path="/NotePage/:noteId"
                render={(props) => (
                  <NotePage state={this.state.store} {...props} />
                )}
              />
              <Route
                path="/FolderPage/:foldId"
                render={(props) => (
                  <FolderPage state={this.state.store} {...props} />
                )}
              />
          </section>
        </div>
      </div>
    );
  }
}

export default App;
