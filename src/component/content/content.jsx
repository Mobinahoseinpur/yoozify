import React,{Fragment} from 'react'
import styles from '../content/Content.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Introduction from '../introduction/Introduction';
import Category from '../category/Category';

const Content = () => {
    return ( 
        <Fragment>

            <div className={`${styles.content_}  container `}>
                {/* <Introduction/> */}
                <Category/>
            </div>
        </Fragment>
     );
}
 
export default Content;