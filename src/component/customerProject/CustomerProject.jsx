import React, { Fragment } from 'react'
import image from './../../asset/Intersect2.png'
import Content from '../content/Content'
import styles from './customerProject.module.css'

const CustomerProject = () => {
  return (
    <Fragment>
      <Content>
        <div className={`${styles.test} container row`}>
            <h3 className={`${styles.titlename} container`}> نمونه کار </h3>
                <div className={`${styles.box} col-sm-3`}>  
                    <img className={`${styles.photo}`} src={image} alt=''/>
                </div>
                {/* reapet */}

                <div className={`${styles.box} col-sm-3`}>  
                    <img className={`${styles.photo}`} src={image} alt=''/>
                </div>
                <div className={`${styles.box} col-sm-3`}>  
                    <img className={`${styles.photo}`} src={image} alt=''/>
                </div>

                <div className={`${styles.box} col-sm-3`}>  
                    <img className={`${styles.photo}`} src={image} alt=''/>
                </div>
                <div className={`${styles.box} col-sm-3`}>  
                    <img className={`${styles.photo}`} src={image} alt=''/>
                </div>
                <div className={`${styles.box} col-sm-3`}>  
                    <img className={`${styles.photo}`} src={image} alt=''/>
                </div>
        </div>
      </Content>
      
    </Fragment>
  )
}

export default CustomerProject