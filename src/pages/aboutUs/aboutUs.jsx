import Slider from 'react-animated-slider'
import 'react-animated-slider/build/horizontal.css'
import Layout from '../../components/layout/Layout'
import style from './aboutUs.module.scss'
import { imagesClients } from '../../data/client'

const AboutUs = () => {
  return (
    <div className={style.container}>
      <Layout title={'About us'}>
        <div>
          <div className={style.textContainer}>
            <p className={style.text}>
              We are #1 yacht rental company when it comes to quality and prices. We make sure you get the best price in
              our variety of yachts and jetskies. We also offer our clients to come see our yachts in person or video
              call so that way we guarantee you that you get yacht you were looking for. Also We offer our clients
              variety of activities such as Miami mansions tours, sandbars, best islands in Miami and go to the best
              restaurants and bars in your private Yacht. Most importantly we make sure you find best environment
              depending on the activity you looking for whether it’s relax and family time or party time.
            </p>
          </div>
          <div className={style.containerSlider}>
            <Slider className='slider slide'>
              {imagesClients.map((slide, index) => (
                <div
                  key={index}
                  className={style.imgContainer}>
                  <img
                    src={slide}
                    alt=''
                    className={style.img}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default AboutUs
