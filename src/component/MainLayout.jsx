import React,{Fragment} from 'react'
import {Switch,Route,BrowserRouter} from 'react-router-dom'; 
import Landing from './LandingPage/LandingPage'

const MainLayout = () => {
    return ( 
        <Fragment>
            <Switch>
                <Route path="/" exact component={Landing}/>
            </Switch>
        </Fragment>
     );
}
 
export default MainLayout;