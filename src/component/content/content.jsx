import React,{Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './content.module.css';

const Content = (props) => {
    return ( 
        <Fragment>
            <div className={`${styles.content_} container row container-fluid main_container`}>
                <p>{props.children}</p> 
            </div>
            
        </Fragment>
     );
}
 
export default Content;
 
