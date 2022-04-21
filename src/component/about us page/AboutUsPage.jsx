import React,{Fragment} from 'react'
import Content from '../content/Content'
import styles from './AboutUsPage.module.css'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const AboutUsPage = () => {

    const center = {
        lat: -3.745,
        lng: -38.523
      };

      const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "YOUR_API_KEY"
      })

      
    return ( 
        <Fragment>
            <Content>
                <div className={`${styles.mainbox}`}>
                    <div className={`${styles.box1}`}>
                        <label className={`${styles.partitiontitle}`}> ارتباط با ما</label>
                        <input type="text" className={`${styles.title}`} placeholder="عنوان" />
                        <input type="text" className={`${styles.massegebox}`} placeholder="متن..."/>

                        <input type="button" className={`${styles.sendbtn}`} value="ارسال" />
 
                    </div>
                    <div className={`${styles.box2}`}></div>
                </div>
                <div className={`${styles.mapbox}`}>

                </div>
            </Content>
        </Fragment>
     );
}
 
export default AboutUsPage;