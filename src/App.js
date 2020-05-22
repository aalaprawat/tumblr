import React from 'react';
import './App.css';
import Homepage from './pages/homepage';
import {Switch,Route} from 'react-router-dom'
import Header from './component/Header'
import Shoppage from './pages/shoppage';


function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage}/>  
        <Route exact path='/shop' component={Shoppage}/>  
      </Switch> 
    </div>
  );
}

export default App;
