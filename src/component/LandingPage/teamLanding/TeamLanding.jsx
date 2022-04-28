import React,{Fragment} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './TeamLanding.module.css'
import image from './../../../asset/business-school-headshot-westport-connecticut-photo-studio 1.png'

const TeamLanding = () => {
    return (
        <Fragment>
             <div className={`${styles.mainbox} container row`}>
             <h3 className={`${styles.titlename} container`}> نمونه کار </h3>
                 <div className={`${styles.box}`}>
                     <img className={`${styles.personalimage} d-flex justify-content-center`} src={image} alt=''/>
                     <div className={`${styles.frontgradient}  `}></div>
                     <p className={`${styles.personalname} d-flex justify-content-center`}>مبینا حسین پور</p>
                     <p className={`${styles.activitiname} d-flex justify-content-center`}>طراح ui , ux</p>

                 </div>
                 {/* reapit */}

                 <div className={`${styles.box}`}>
                     <img className={`${styles.personalimage} d-flex justify-content-center`} src={image} alt=''/>
                     <div className={`${styles.frontgradient}  `}></div>
                     <p className={`${styles.personalname} d-flex justify-content-center`}>مبینا حسین پور</p>
                     <p className={`${styles.activitiname} d-flex justify-content-center`}>طراح ui , ux</p>

                 </div>


                 <div className={`${styles.box}`}>
                     <img className={`${styles.personalimage} d-flex justify-content-center`} src={image} alt=''/>
                     <div className={`${styles.frontgradient}  `}></div>
                     <p className={`${styles.personalname} d-flex justify-content-center`}>مبینا حسین پور</p>
                     <p className={`${styles.activitiname} d-flex justify-content-center`}>طراح ui , ux</p>

                 </div>
             </div>

        </Fragment> 
    );
}
 
export default TeamLanding;