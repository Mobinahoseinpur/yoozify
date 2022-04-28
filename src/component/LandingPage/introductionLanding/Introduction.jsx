import React,{Fragment} from 'react'
import styles from './Introduction.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom';

const Introduction = () => {
    return (
        <Fragment>
            <div className={`${styles.mainbox}  container row`}>
                
                <div className={`${styles.box2}  col-lg-6 col-md-6  col-sm-6`}>
                    <h3 className={`${styles.font} ${styles.title}`}> چگونه در شبکه های اجتماعی شناخته شده باشیم ؟  </h3>
                    <h5 className={`${styles.font}`}> با استراتژی کسب و کار  ، تبلیغ نویسی حرفه ای ، ارتباط با مشتریان ، اسان سازی دسترسی </h5>
                    <Link to="customer" className={`${styles.atag}`} ><button className={`${styles.btn}`} > مشاهده پروژه </button> </Link>
                </div>
                <div className={`${styles.box1} col-lg-6 col-md-6  col-sm-6`}>
                    <img className={`${styles.image}`} src={`./asset/img/p2.png`} alt=''/>
                </div>
                
            </div>
        </Fragment> 
    );
}
 
export default Introduction;