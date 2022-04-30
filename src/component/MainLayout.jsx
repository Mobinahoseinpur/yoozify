import React,{Fragment} from 'react'
// import {Switch,Route,BrowserRouter} from 'react-router-dom'; 
import {Routes,Route } from 'react-router-dom';
import Landing from './LandingPage/LandingPage'
import ContactUs from './about us page/AboutUsPage'
import GetToKnowUs from './get to know us/GetToKnowUs'
import Services from './ServicePage/ServicePage'
// import Blogs from './blogPage/BlogList'
import Customer from './customerProject/CustomerProject'
import Blogs from './blogPage/BlogDetails'

const MainLayout = () => {
    return ( 
        <Fragment>
            <Routes>
                <Route path="/" exact element={<Landing/>}/>
                <Route path="/ContactUs"  element={<ContactUs/>}/>
                <Route path="/GetToKnowUs"  element={<GetToKnowUs/>}/>
                <Route path="/Services" element={<Services/>}/>
                
                <Route path='/Blogs' element={<Blogs/>}/> 
                <Route path="/Customer"  element={<Customer/>}/>
            </Routes>   
        </Fragment>
     );
}
 
export default MainLayout;

