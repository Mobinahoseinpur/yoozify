import React,{Fragment} from 'react'
import styles from '../content/content.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import Introduction from '../LandingPage/introductionLanding/Introduction';
// import Category from '../category/Category';
// import AboutUsLanding from '../about us landing/AboutUsLanding';
// import ServicesLanding from '../servicesLanding/ServicesLanding';
// import ProjectSamples from '../project samples/ProjectSamples';
// import ProjectSamplesSlider from '../ProjectSamplesSlider/ProjectSamplesSlider';
// import TeamLanding from '../teamLanding/TeamLanding'
// import BlogLanding from '../blogLanding/BlogLanding'
import Header from '../Header'

const Content = (props) => {
    return ( 
        <Fragment>
            <div className={`${styles.content_}  container `}>
                <Header></Header>
                {props.children}
        
            </div>
        </Fragment>
     );
}
 
export default Content;