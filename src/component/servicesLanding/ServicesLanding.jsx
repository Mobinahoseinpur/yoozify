import React,{Fragment} from 'react'
import styles from './ServicesLanding.module.css'
import image from './../../asset/Intersect.png'

const ServicesLanding = () => {
    return ( 
        <Fragment>
            <div className={`${styles.box}`}>
                 <img className={`${styles.photo}`} src={image} alt=''/>
            </div>
        </Fragment>
     );
}
 
export default ServicesLanding;