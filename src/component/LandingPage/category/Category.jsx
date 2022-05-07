import React,{Fragment} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './Category.module.css'
// import p1 from './mobile.svg'
import p2 from './laptop.svg'
import p3 from './camera.svg'
import p4 from './chart.svg'
const Category = () => {
    return (
         <Fragment>
            <div className={`${styles.mainbox} container row `}>
                
                <div className={`${styles.box} col-sm-3 `}>
                    <div className={`${styles.imgcategorybox}`}></div>
                    <img src={p2} className={`${styles.imgcategory}`}/>
                    <h2 className={`${styles.textCategory}`}>طراحی سایت و اپلیکشن</h2>
                </div>
                
                <div className={`${styles.box} col-sm-3 `}>
                    <img src={p2} className={`${styles.imgcategory}`}/>
                    <h2 className={`${styles.textCategory}`}>سئو سایت  </h2>
                </div>
                
                <div className={`${styles.box} col-sm-3 `}>
                    <img src={p3} className={`${styles.imgcategory}`}/>
                    <h2 className={`${styles.textCategory}`}>تولید محتوا و مدیریت رسانه</h2>
                </div>
                
                <div className={`${styles.box} col-sm-3 `}>
                    <img src={p4} className={`${styles.imgcategory}`}/>
                    <h2 className={`${styles.textCategory}`}>مشاوره کسب و کار</h2>
                </div>
                
            </div>
         </Fragment>
    );
}
 
export default Category;