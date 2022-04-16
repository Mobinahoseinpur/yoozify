import React,{Fragment} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './ProjectSamplesSlider.module.css'
import image from './../../asset/Intersect3.png'
const ProjectSamplesSlider = () => {
    return ( 
        <Fragment>
            <div className={`${styles.mainbox} container row`}>
                <div className={`${styles.boxright} col-6`}>
                    <div className={` ${styles.backbox}`}></div>
                    <div className={`${styles.frontbox}`}>
                        <img className={`${styles.frontbox}`} src={image} alt=''/>
                    </div>
                </div>
                <div className={`${styles.boxleft} col-6`}>l</div>
            </div>
        </Fragment>
     );
}
 
export default ProjectSamplesSlider;