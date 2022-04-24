import React,{Fragment} from 'react'
// import {Switch,Route,BrowserRouter} from 'react-router-dom'; 
import {Routes,Route,BrowserRouter as Router,  useParams} from 'react-router-dom';
import Landing from './LandingPage/LandingPage'
import ContactUs from './about us page/AboutUsPage'
import GetToKnowUs from './get to know us/GetToKnowUs'
const MainLayout = () => {
    return ( 
        <Fragment>
            <Routes>
                <Route path="/" exact element={<Landing/>}/>
                <Route path="/ContactUs"  element={<ContactUs/>}/>
                <Route path="/GetToKnowUs"  element={<GetToKnowUs/>}/>
            </Routes>   
        </Fragment>
     );
}
 
export default MainLayout;

