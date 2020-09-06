import React from "react";
import "./App.css";
import Header from "./components/Header";
import SearchPage from "./components/SearchPage";
import SideBar from "./components/SideBar";
import RecommendedVideos from "./components/RecommendedVideos";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        {/* Header */}
        <Header />
        <Switch>
          {/* Search Route Page */}
          <Route path="/search">
            <div className="app__page">
              <SideBar />
              <SearchPage />
            </div>
          </Route>
          {/* Home Route */}
          <Route path="/">
            <div className="app__page">
              <SideBar />
              <RecommendedVideos />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
