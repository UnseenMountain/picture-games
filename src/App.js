import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import game from "./pages/game"

function App() {
  return (
   <Router>
     <div>
       <Route exact path="/" component={game} />
       <Route exact path="/game" component={game} />

     </div>
   </Router>
  );
}

export default App;
