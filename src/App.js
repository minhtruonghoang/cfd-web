import './assets/css/custom.css';
import Reacr,{useRef} from 'react'
import Header from "./pages/components/Header";
import Footer from "./pages/components/Footer";
import Home from "./pages/home";
import Team from "./pages/team";
import Profile from "./pages/profile/";
import Contact from "./pages/contact";
import FAQ from "./pages/FAQ";
import Course from "./pages/courses";
import Project from "./pages/project";
import Demo from "./pages/demo";
import Login from './pages/components/Login'
import Register from './pages/register'
import Error from './pages/error'
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
    <Header />
      <Switch>
        <Route path="/team" component={Team} />
        <Route path="/profile" component={Profile}  />
        <Route path="/contact" component={Contact} />
        <Route path="/faq" component={FAQ} />
        <Route path="/course" component={Course} />
        <Route path="/register" component={Register} />
        <Route path="/project" component={Project} />
        <Route exact path="/" component={Home} />
        <Route path="/" component={Error} />
      </Switch>
      <Footer />
    <Login ref={login}  />
    </BrowserRouter>
  );
}

export default App;
