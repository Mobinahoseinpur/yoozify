import React,{Fragment} from 'react'
import image from './../../asset/Intersect.png'
import styles from './Services.module.css'
import Content from './../content/Content'
const ServicePage = () => {
  return (
    <Fragment>
        <Content>
        <div className={`${styles.mainbox} container row`}>
            <h3 className={`${styles.titlename} container`}> خدمات </h3>
                <div className={`${styles.box} col-sm-3`}>  
                    <img className={`${styles.photo}`} src={image} alt=''/>
                    <h2 className={`${styles.title}`}>طراحی سایت و اپلیکشن</h2>
                    <div className={`${styles.txt}`}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،</div>
                </div>
                {/* reapet */}

                <div className={`${styles.box} col-sm-3`}>
                    <img className={`${styles.photo}`} src={image} alt=''/>
                    <h2 className={`${styles.title}`}>طراحی سایت و اپلیکشن</h2>
                    <div className={`${styles.txt}`}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،</div>
                </div>
                <div className={`${styles.box} col-sm-3`}>
                    <img className={`${styles.photo}`} src={image} alt=''/>
                    <h2 className={`${styles.title}`}>طراحی سایت و اپلیکشن</h2>
                    <div className={`${styles.txt}`}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،</div>
                </div>
            </div>
            </Content>
    </Fragment>
  )
}

export default ServicePage