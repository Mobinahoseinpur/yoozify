import React,{Fragment} from 'react'
import styles from './Category.module.css'

const Category = () => {
    return (
         <Fragment>
            <div className={`${styles.mainbox} row col-12`}>
                
                <div className={`${styles.box} col d-flex justify-content-between`}>mobin</div>
                <div className={`${styles.box} col `}>mobin</div>
                <div className={`${styles.box} col `}>mobin</div>
                <div className={`${styles.box} col `}>mobin</div>
                
            </div>
         </Fragment>
    );
}
 
export default Category;