import React,{Fragment} from 'react'
import styles from '../content/Content.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Introduction from '../introductionLanding/Introduction';
import Category from '../category/Category';
import AboutUsLanding from '../about us landing/AboutUsLanding';
import ServicesLanding from '../servicesLanding/ServicesLanding';

const Content = () => {
    return ( 
        <Fragment>

            <div className={`${styles.content_}  container `}>
                <Introduction/>
                <Category/>
                <AboutUsLanding/>
                <ServicesLanding/>
            </div>
        </Fragment>
     );
}
 
export default Content;