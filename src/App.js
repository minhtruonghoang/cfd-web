import './assets/css/custom.css';
import Reacr,{useRef} from 'react'
import Header from "./pages/components/header";
import Footer from "./pages/components/footer";
import Home from "./pages/home";
import Team from "./pages/team";
import Profile from "./pages/profile/";
import Contact from "./pages/contact";
import FAQ from "./pages/FAQ";
import Course from "./pages/courses";
import Project from "./pages/project";
import Demo from "./pages/demo";
import Login from './pages/components/login'


function App() {
  let getphone=useRef();
  let login=useRef();
  function Phonevalue(){
getphone.current.value="0936365970"
  }
  function openP(){
    console.log(login)
    // login.current.open();
  }
  function closeP(){
    login.current.close();
  }
  return (
    <>
      <Header />
      <Demo/>
      <button onClick={Phonevalue}>getphone</button>
      <button onClick={openP}>openP</button>
      <button onClick={closeP}>CloseP</button>
      {/* <Home /> */}
      {/* <Team/> */}
      {/* <Profile/> */}
      <Contact ref={getphone}/>
      {/* <FAQ/> */}
      {/* <Course/> */}
      {/* <Project/> */}
      <Footer />
      <Login ref={login}  />

    </>
  );
}

export default App;
