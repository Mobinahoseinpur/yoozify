import React,{Fragment} from 'react'
// import { BrowserRouter,Route,Link,NavLink } from 'react-router-dom';
import styles from './headerfooterstyle/cssStyle.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import p from './../asset/footer.svg'
const Footer = () => {
  return (
      <Fragment>
        <img src={p}  className={`${styles.linefooter}`}/> 
        <div className={`${styles.mainfootediv} container `}>
             Footer
        </div> 
      </Fragment>
    
  )
}

export default Footer