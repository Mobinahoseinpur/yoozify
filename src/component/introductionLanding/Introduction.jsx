import React,{Fragment} from 'react'
import styles from './Introduction.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const Introduction = () => {
    return (
        <Fragment>
            <div className={`${styles.mainbox}  container`}>
                
                <div className={`${styles.box2} col-5`}>
                    <h3>لورم ایپسوم لورم ایپسوم متن ساختگی  </h3>
                    <h6>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می ب</h6>
                </div>
                <div className={`${styles.box1} col-6`}>
                    <img className="mr-3" src={`./asset/img/p2.png`} alt=''/>
                </div>
            </div>
        </Fragment> 
    );
}
 
export default Introduction;