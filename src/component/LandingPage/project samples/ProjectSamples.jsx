import React,{Fragment} from 'react'
import styles from './ProjectSamples.module.css'
import image from './../../../asset/Intersect2.png'

const ProjectSamples = () => {
    return ( 
        <Fragment>
            <div className={`${styles.test} container row`}>
            <h3 className={`${styles.titlename} container`}> نمونه کار </h3>
                <div className={`${styles.box} col-sm-3`}>  
                    <img className={`${styles.photo}`} src={image} alt=''/>
                </div>
                {/* reapet */}

                <div className={`${styles.box} col-sm-3`}>  
                    <img className={`${styles.photo}`} src={image} alt=''/>
                </div>
                <div className={`${styles.box} col-sm-3`}>  
                    <img className={`${styles.photo}`} src={image} alt=''/>
                </div>

                <div className={`${styles.box} col-sm-3`}>  
                    <img className={`${styles.photo}`} src={image} alt=''/>
                </div>
                <div className={`${styles.box} col-sm-3`}>  
                    <img className={`${styles.photo}`} src={image} alt=''/>
                </div>
                <div className={`${styles.box} col-sm-3`}>  
                    <img className={`${styles.photo}`} src={image} alt=''/>
                </div>
            </div>
        </Fragment>
     );
}
 
export default ProjectSamples;