import React,{Fragment} from 'react'
import Content from '../content/Content';
import Introduction from './introductionLanding/Introduction'
import Category from './category/Category'
import AboutUsLanding from './about us landing/AboutUsLanding';
import ServicesLanding from './servicesLanding/ServicesLanding';
import ProjectSamples from './project samples/ProjectSamples';
import ProjectSamplesSlider from './ProjectSamplesSlider/ProjectSamplesSlider';
import TeamLanding from './teamLanding/TeamLanding';
import BlogLanding from './blogLanding/BlogLanding';
import styles from './LandingPage.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
const LandingPage = () => { 
    return ( 
        <Fragment>
            <Content>
                <Introduction></Introduction>
                <Category/>
                <AboutUsLanding/>
                <ServicesLanding/>
                <ProjectSamples/>
                <ProjectSamplesSlider/>
                <TeamLanding/>
                <BlogLanding/>
            </Content>
        </Fragment>
     );
}
 
export default LandingPage;