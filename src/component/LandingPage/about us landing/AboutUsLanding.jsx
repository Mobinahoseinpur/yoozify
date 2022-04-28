import React,{Fragment} from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './AboutUsLanding.module.css'
import Devices from './Devices.svg'

const AboutUsLanding = () => {
    return ( 
        <Fragment>
            
            <div className={`${styles.mainbox} container row`}>
                <div className={`${styles.imgbox} col`}>
                    <img className={`${styles.image}`} src={Devices}/>
                </div> 

                <div className={`${styles.textbox} col`} >
                    <h2 className={`${styles.textbox_title}`}> درباره ی یوزیفای </h2 >
                    <p className={`${styles.pararaph}`}>
                    مجموعه یوزیفای به دنبال گسترش فعالیت های تیم فناوری دانشگاه شریف 
                    در فضای تبلیغات انلاین در فروردین 1400 با نماد یوز ایرانی ساخته شد. ما همواره در تلاشیم
                     با خلق بستری مناسب و از طریق تیم متخصصدر زمینه ی تبلیغات و سئو و طراحی سایت حرفه ای در 
                     امد بیشاری را برای کسب و کار های انلاین و سنتی به عمل بیاوریم
                    </p>
                    <div className={`${styles.stylebtn}`}>
                        <Link to="GetToKnowUs" > <button className={`${styles.btn}`}> مشاهده ی بیشتر </button></Link>
                    </div>
                </div>

            </div>
            
        </Fragment>
     );
}
 
export default AboutUsLanding;