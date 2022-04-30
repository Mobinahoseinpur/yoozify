import React,{Fragment} from 'react'
import Content from '../content/Content'
import styles from './AboutUsPage.module.css'

const AboutUsPage = () => {

    return ( 
        <Fragment>
            <Content>
                <div className={`${styles.mainbox}`}>
                    <div className={`${styles.box1}`}>
                        <form>
                            <label className={`${styles.partitiontitle}`}> ارتباط با ما</label>
                            <input type="text" className={`${styles.title}`} placeholder="عنوان" />
                            <input type="text" className={`${styles.massegebox}`} placeholder="متن..."/>

                            <input type="button" className={`${styles.sendbtn}`} value="ارسال" />
                        </form>
                    </div>
                    <div className={`${styles.box2}`}></div>
                </div>
                <div className={`${styles.mapbox}`}>
                    
                    <iframe src="http://maps.google.com/maps?q=36.464620349141185,52.854578539352104&z=16&output=embed" className={`${styles.mapstyle}`}></iframe>
                </div>
            </Content>
        </Fragment>
     );
}
 
export default AboutUsPage;