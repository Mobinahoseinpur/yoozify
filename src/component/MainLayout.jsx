import React,{Fragment} from 'react'
import {Routes,Route } from 'react-router-dom';
import Landing from './LandingPage/LandingPage'
import ContactUs from './about us page/AboutUsPage'
import GetToKnowUs from './get to know us/GetToKnowUs'
import Services from './ServicePage/ServicePage'
import Customer from './customerProject/CustomerProject'
import BlogList from './blogPage/BlogList'
import Blog from './blogPage/BlogDetails'


const MainLayout = () => {
    return ( 
        <Fragment>
            <Routes>
                <Route path="/" exact element={<Landing/>}/>
                <Route path="/ContactUs"  element={<ContactUs/>}/>
                <Route path="/GetToKnowUs"  element={<GetToKnowUs/>}/>
                <Route path="/Services" element={<Services/>}/>
                <Route path='/Blog/:id' element={<Blog/>}/> 
                {/* <BlogContextProvider></BlogContextProvider> */}
                   <Route path='/BlogList' element={<BlogList/>}/>  
                
                
                <Route path="/Customer"  element={<Customer/>}/>
            </Routes>   
        </Fragment>
     );
}
 
export default MainLayout;

