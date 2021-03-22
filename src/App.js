import './assets/css/custom.css';
import Reacr,{useRef} from 'react'
import routers from './router'
import renderRouter from "./core/RouterConfig"
import {BrowserRouter, Switch,Route,Link} from 'react-router-dom'



function App() {
  return (
    <BrowserRouter>
    {renderRouter(routers)}
    </BrowserRouter>
  );
}

export default App;
