import React,{Fragment} from 'react';
import styles from './GetToKnowUs.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Content from './../content/Content'
import Team from './../LandingPage/teamLanding/TeamLanding'
import Accordion from 'react-bootstrap/Accordion';
const GetToKnowUs = () => {
    return ( 
        <Fragment>
            <Content>
            <div className={`${styles.mainbox}  container`}>
                
                <div className={`${styles.box2} col-5`}>
                    <h3>لورم ایپسوم لورم ایپسوم متن ساختگی  </h3>
                    <h6>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می ب</h6>
                </div>
                <div className={`${styles.box1} col-6`}>
                    <img className={`${styles.imgbox}`} src={`./asset/img/p2.png`} alt=''/>
                </div>
                
            </div>

            <div className={`${styles.acardeon} container`}>

                <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>سوالات پر تکرار </Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>
            </div>
            <Team/>
            </Content>
        </Fragment>
     );
}
 
export default GetToKnowUs;