import React,{Fragment} from 'react';
import styles from './GetToKnowUs.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Content from './../content/Content'
import Team from './../LandingPage/teamLanding/TeamLanding'
const GetToKnowUs = () => {
    return ( 
        <Fragment>
            <div className={`${styles.mainbox}  container`}>
                
                <div className={`${styles.box2} col-5`}>
                    <h3>لورم ایپسوم لورم ایپسوم متن ساختگی  </h3>
                    <h6>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می ب</h6>
                </div>
                <div className={`${styles.box1} col-6`}>
                    <img className="mr-3" src={`./asset/img/p2.png`} alt=''/>
                </div>
                
            </div>

            <div className={`${styles.acardeon} container`}>
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            سوالات پر تکرار
                        </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                        </div>
                    </div>


                </div>
            </div>
            <Team/>
        </Fragment>
     );
}
 
export default GetToKnowUs;