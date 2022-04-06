import React,{Fragment} from 'react';
import styles from './AboutUsLanding.module.css'
import Devices from './Devices.svg'

const AboutUsLanding = () => {
    return ( 
        <Fragment>
            <div className={`${styles.mainbox}`}>
                <div className={`${styles.imgbox}`}>
                    <img src={Devices}/>
                </div> 

                <div  >
                    <h2 className={`${styles.textbox_title}`}> درباره ی یوزیفای </h2 >
                    <p className={`${styles.pararaph}`}>

                    </p>
                    <button className={`${styles.btn}`}> مشاهده ی بیشتر </button>
                </div>

            </div>
        </Fragment>
     );
}
 
export default AboutUsLanding;