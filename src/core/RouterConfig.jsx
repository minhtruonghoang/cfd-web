import { Route, Switch } from "react-router";
/**
 *
 * @param {*} routers: []
 */

export default function renderRouter(routers) {
  console.log(routers);
  return (
    <Switch>
      {routers.map((e,index) => {
        let { exact, path, component: Component,routers:RouterChild} = e
        let children = []
        if(RouterChild){
          children=renderRouter(RouterChild)
        }
        return  <Route
            key={index}
            exact={exact}
            path={path}
            component={(props)=> <Component {...props} >{children}</Component>}
          >
          </Route>
        ;
      })}
    </Switch>
  );
}
