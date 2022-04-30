import React,{Fragment} from 'react';
import styles from './GetToKnowUs.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Content from './../content/Content'
import Team from './../LandingPage/teamLanding/TeamLanding'
import Accordion from 'react-bootstrap/Accordion';
import pic from "./1.png"
const GetToKnowUs = () => {
    return ( 
        <Fragment>
            <Content>
            <div className={`${styles.mainbox}  container`}>
                
                {/* <div className={`${styles.box2} col-5`}>
                    <h3>لورم ایپسوم لورم ایپسوم متن ساختگی  </h3>
                    <h6>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می ب</h6>
                </div> */}
                <div className={`${styles.box2} col`} >
                    <h2 className={`${styles.textbox_title}`}> درباره ی یوزیفای </h2 >
                    <p className={`${styles.pararaph}`}>
                    مجموعه یوزیفای به دنبال گسترش فعالیت های تیم فناوری دانشگاه شریف 
                    در فضای تبلیغات انلاین در فروردین 1400 با نماد یوز ایرانی ساخته شد. ما همواره در تلاشیم
                     با خلق بستری مناسب و از طریق تیم متخصصدر زمینه ی تبلیغات و سئو و طراحی سایت حرفه ای در 
                     امد بیشاری را برای کسب و کار های انلاین و سنتی به عمل بیاوریم
                    </p>

                </div>
                <div className={`${styles.box1} col-6`}>
                    <img className={`${styles.imgbox}`} src={pic} alt=''/>
                </div>
                
            </div>

            <div className={`${styles.acardeon} container`}>

                <Accordion defaultActiveKey="0"  >
                <Accordion.Item eventKey="0">
                    <Accordion.Header>سوالات پر تکرار </Accordion.Header>
                    <Accordion.Body>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
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