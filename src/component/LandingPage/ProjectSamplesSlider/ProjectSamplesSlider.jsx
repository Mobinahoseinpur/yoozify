import React,{Fragment, useState} from 'react'
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './ProjectSamplesSlider.module.css'
import p1 from './Intersect.png'
import p2 from './2.jpg'
import p3 from './3.jpg'
const ProjectSamplesSlider = () => {

    const imgs=[
        {id:0 , value:p1 , txt:"one"},
        {id:1 , value:p2 , txt:"two"},
        {id:2 , value:p3 , txt:"three"}
      ];
     
      const [sliderData , setSliderData] = useState(imgs[0])
      const handleClick = (index) => {
        console.log(index);
        const slider = imgs[index];
        setSliderData(slider)
      } 


    return ( 
        <Fragment>
            <div className={`${styles.mainbox} container row`}>
                <div className={`${styles.boxright} col-6`}>
                    <div className={` ${styles.backbox}`}></div>
                    <div className={`${styles.frontbox}`}>
                            <img src={sliderData.value} className={`${styles.frontbox}`}/>
                    </div>
                </div>
                <div className={`${styles.boxleft} col-6 justify-content-center`}>
                   <div className={`${styles.showtext} `}>{sliderData.txt}</div> 
                <div className="flex-row">
                    {
                        imgs.map((data,i)=>
                        <div className={`${styles.nav} justify-content-center `}>
                            {/*  */}
                            <img className={sliderData.id==i?"click":""} key={data.id} src={data.value} onClick={() => {handleClick(i)}} height="70" width="100"  />
                        </div>
                        )
                    }
                </div>
                    
                </div>
            </div>
        </Fragment>
     );
}
 
export default ProjectSamplesSlider;