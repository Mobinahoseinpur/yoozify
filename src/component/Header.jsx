import React,{Fragment} from 'react'
import { BrowserRouter,Route,Link,NavLink } from 'react-router-dom';
import styles from './headerfooterstyle/cssStyle.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function Header() {
  return (
    <Fragment>
        <div className={`${styles.mother} container`}>
          <div className={` ${styles.box} ${styles.flex_container}`}>
            <div className={`${styles.logo} col-sm-7`}> 
                <div className={styles.yoozify}>yoozify company</div>
            </div>

            <div className={`${styles.menuone} col-sm-5`}>
                <div className={styles.menu}><Link to="/ContactUs"> ارتباط با ما</Link></div>
                <div className={styles.menu}>بلاگ</div>
                <div className={styles.menu}><Link to="/GetToKnowUs">اشنایی با ما</Link></div>
                <div className={styles.menu}>مشتریان</div>
                <div className={styles.menu}>خدمات</div>
                {/* <Link to=''>  </Link> */}
                <div className={styles.menu}>صفحه اصلی</div>
            </div>


          </div>
        </div>
    </Fragment>
  )
}

export default Header