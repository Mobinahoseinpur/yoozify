import React, { Fragment } from 'react'
import styles from './blogstyle.module.css'
// import image from './../../../asset/Intersect.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
// import {redirect} from react-router-dom

const BlogBox = ({imgUrl, title, content, detailUrl}) => {
  return (
    <Fragment>
            <div className={`${styles.mainbox} container row`}>
            
                <div className={`${styles.box} col-sm-3`}>  
                    <img className={`${styles.photo}`} src={imgUrl} alt=''/>
                    <h2 className={`${styles.title}`}>{title}</h2>
                    <div className={`${styles.txt}`}>{content}</div>
                    <div className={`${styles.show}`}>
                        <div className={`${styles.showmore}`} ><Link to="/Blog/:id">مشاهده</Link>  </div>
                    </div>
                </div>
            </div>
    </Fragment>
  )
}

export default BlogBox