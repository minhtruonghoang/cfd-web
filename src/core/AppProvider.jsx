import React,{useContext,useState,useRef} from 'react'
import {BrowserRouter, Switch,Route,Link} from 'react-router-dom'
export let Context = React.createContext()
export default function AppProvider({chilren}){
    let[auth,setAuth]=useState(
        {
          login:false,
          user:'',
        }
      )
      let user={
        name:'Trương Hoàng Minh',
        email:"minhtruonghoang28@gmail.com",
        fb:"https://fb.vn/hoangminh28",
        phone:"0983695970",
        class:"CFD5",
        skype:""
      }
      function handleLogin(){
        setAuth({
          login:true,
          user:{
            name:'Trương Hoàng Minh',
            email:"minhtruonghoang28@gmail.com",
            fb:"https://fb.vn/hoangminh28",
            phone:"0983695970",
            class:"CFD5",
            skype:""
          }
        })
      }
      function Logout(){
        setAuth(
          {
            login:false,
            user:'',
          }
        )
      }
      return(
        <Context.Provider value={{...auth,handleLogin,Logout}}>
        <BrowserRouter>
         {chilren}
        </BrowserRouter>
      </Context.Provider>
      )
}