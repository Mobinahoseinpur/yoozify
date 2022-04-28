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
        {id:0 , value:p1},
        {id:1 , value:p2},
        {id:2 , value:p3}
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

                        {/* <Carousel> */}
                            {/* <div>
                                <img src={p1} className={`${styles.b}`} />
                                <p className={`${styles.c}`}>Legend 1</p>
                            </div>
                             */}


                            <img src={sliderData.value} className={`${styles.frontbox}`}/>
                                <div className="flex-row">

                                {
                                    imgs.map((data,i)=>
                                    <div className={`${styles.nav}`}>
                                    <img className={sliderData.id==i?"click":""} key={data.id} src={data.value} onClick={() => {handleClick(i)}} height="70" width="100"  />
                                    </div>
                                    )
                                }
                                </div>
                        {/* </Carousel> */}
                        {/* <img className={`${styles.frontbox}`} src={image} alt=''/> */}
                    </div>
                </div>
                <div className={`${styles.boxleft} col-6`}>
                    

                    slam
                </div>
            </div>
        </Fragment>
     );
}
 
export default ProjectSamplesSlider;