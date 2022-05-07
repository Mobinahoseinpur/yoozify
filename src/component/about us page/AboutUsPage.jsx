import React,{Fragment,useState,useEffect} from 'react'
//API
import {postContactUs} from './../../services/api'
import Content from '../content/Content'
import styles from './AboutUsPage.module.css'


const AboutUsPage = () => {
    const [data , setData]=useState([])
    const [title , setTitle]= useState('')
    const [body , setbody]= useState('')
    

    return ( 
        <Fragment>
            <Content>
                <div className={`${styles.mainbox}`}>
                    <div className={`${styles.box1}`}>
                        <label className={`${styles.partitiontitle}`}> ارتباط با ما</label>
                        <form onSubmit={handleSubmit}>
                            <input type="text" name="title" className={`${styles.title}`} placeholder="عنوان" />
                            <input type="text" name="content" className={`${styles.massegebox}`} placeholder="متن..."/>

                            <input type="submit" className={`${styles.sendbtn}`} value="ارسال" />
                        </form>
                    </div>
                    <div className={`${styles.box2}`}></div>
                </div>
                <div className={`${styles.mapbox}`}>
                    
                    <iframe src="http://maps.google.com/maps?q=36.464620349141185,52.854578539352104&z=16&output=embed" className={`${styles.mapstyle}`}></iframe>
                </div>
            </Content>
        </Fragment>
     );
}
 
export default AboutUsPage;


// const handleSubmit=(event)=> {
//     event.preventDefault();
//     const data = new FormData(event.target.value);

//     console.log(data.get()); // reference by form input's `name` tag

//     fetch('http://yoozify.herokuapp.com/contact-us/', {
//       method: 'POST',
//       body: data,
//     });
//   }