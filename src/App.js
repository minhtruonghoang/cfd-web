import React,{useContext,useState,useRef} from 'react'
import './assets/css/custom.css';
import routers from './router'
import renderRouter from "./core/RouterConfig"
import AppProvider from './core/AppProvider';

function App() {
  return (
   <AppProvider>
      {renderRouter(routers)}
   </AppProvider> 
  );
}
export default App;
