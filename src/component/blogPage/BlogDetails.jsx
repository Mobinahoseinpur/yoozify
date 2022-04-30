import React, { Fragment, useState } from 'react'
import Content from './../content/Content'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './blogstyle.module.css'
import p1 from './../../asset/whatsapp.png'
const BlogDetails = () => {
  const writer=[
    {id:0 , data:1 , name:"one"},
    {id:1 , data:2 , txt:"two"},
    {id:2 , data:3 , txt:"three"}
  ];
  const [detailsWriter , setDetailsWriter] = useState(writer[0])
  return (
    <Fragment>
      <Content>
        <div className={`${styles.imagebox} container row`}>
          <img src={p1} className={`${styles.image}`} alt="" />
        </div>
        <h2 className={`${styles.title}`}>
        شادی در محل کار چطور حاصل می‌شود؟ معجزه هدف، امید و دوستی  
        </h2>
        <div className={`${styles.textcontent} container `}>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
        </div>
        <div className={`${styles.dateDetails}`}> 
          ارسال در تاریخ {detailsWriter.data} توسط{detailsWriter.name}
        </div>
      </Content>
      
    </Fragment>
    
  )
}

export default BlogDetails