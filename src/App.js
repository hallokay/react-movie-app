import React from "react";
import {HashRouter, Route} from 'react-router-dom';
import Home from "./routes/Home";
import About from "./routes/About";
import Navigation from "./componets/Navigation";


function App () {

  return(
    <HashRouter>
      {/* 네비게이션에서 Link를 쓰려면 네비게이션이 Router안에 있어야함 */}
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      {/* exact 써주면 동시에 렌더링 막아줌 */}
      <Route path="/about" component={About} />
    </HashRouter>

    
  )
}
export default App;