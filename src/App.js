import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const pageSize = 12;
  const apiKey = process.env.REACT_APP_API_NEWS;

  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar
          color='#f11946'
          progress={progress}
        />
        <Switch>
          <Route exact path="/" key="/"><News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="general" /></Route>
          <Route exact path="/about" key="general"><News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="general" /></Route>
          <Route exact path="/business" key="business"><News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="business" /></Route>
          <Route exact path="/entertainment" key="entertainment"><News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="entertainment" /></Route>
          <Route exact path="/health" key="health"><News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="health" /></Route>
          <Route exact path="/sports" key="sports"><News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="sports" /></Route>
          <Route exact path="/technology" key="technology"><News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="technology" /></Route>
          <Route exact path="/science" key="science"><News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="science" /></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
