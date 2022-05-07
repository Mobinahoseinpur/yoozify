import React, { Fragment } from 'react'
import styles from './BlogBox.module.css'
import image from './../../../asset/Intersect.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
// import {redirect} from react-router-dom

const BlogBox = ({blogData}) => {
  return (
    <Fragment>
            <div className={`${styles.mainbox} container row`}>
            
                <div className={`${styles.box} col-sm-3`}>  
                    <img className={`${styles.photo}`} src={image} alt=''/>
                    <h2 className={`${styles.title}`}>{blogData.title}</h2>
                    <div className={`${styles.txt}`}>{blogData.short_descriptions}</div>
                    <div className={`${styles.show}`}>
                        <div className={`${styles.showmore}`} >مشاهده  </div>
                    </div>
                </div>
            </div>
    </Fragment>
  )
}

export default BlogBox