import './assets/css/custom.css';
import Reacr,{useRef} from 'react'
import routers from './router'
import renderRouter from "./core/RouterConfig"
import {BrowserRouter, Switch,Route,Link} from 'react-router-dom'



function App() {
  let getphone=useRef();
  let login=useRef();
  function Phonevalue(){

  getphone.current.value="0936365970"

  }
  function openP(){
    // console.log(login)
    login.current.open();
  }
  function closeP(){
    login.current.close();
  }
  return (
    <BrowserRouter>
    {renderRouter(routers)}
    </BrowserRouter>
  );
}

export default App;
