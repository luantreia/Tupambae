import React from 'react';
import './App.css';
import Menu from './components/Menu';
import Map from './components/Pages/Map';
import Search from './components/Pages/Search';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Menu/>
        <Switch>
          <Route path="/Map" component={Map}/>
          <Route path="/Search" component={Search}/>
        </Switch>
      </div>
    </Router>

    
        
  );
  
}

export default App;
