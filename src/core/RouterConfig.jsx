/**
 * 
 * @param {*} routers[];
 */

import { Route, Switch } from "react-router";



export default function renderRouter(routers){
return <Switch>{
    routers.map(e =>{
        let{exact,path,component:Component,routers:childRouters} = e 
        let children={};
        if (routers) {
            children=renderRouter(childRouters)
        }
        return <Route exact={exact} path={path} component={(pros)=><Component {...pros} >{children}</Component>}>
        </Route>
    })
    }
    
</Switch>
}