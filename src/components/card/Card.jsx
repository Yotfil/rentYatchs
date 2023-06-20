import Slider from 'react-animated-slider'
import 'react-animated-slider/build/horizontal.css'
import img1 from '../../assets/LUMAR 70Ft/IMG_2535.jpg'
import img2 from '../../assets/LUMAR 70Ft/IMG_2536.jpg'
import img3 from '../../assets/LUMAR 70Ft/IMG_2537.jpg'
import img4 from '../../assets/LUMAR 70Ft/IMG_2538.jpg'
import img5 from '../../assets/LUMAR 70Ft/IMG_2539.jpg'
import style from './card.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Card = () => {
  const slides = [
    { title: 'First item', img: img1 },
    { title: 'Second item', img: img2 },
    { title: 'Third item', img: img3 },
    { title: 'Fourth item', img: img4 },
    { title: 'Fifth item', img: img5 },
  ]
  const yatch = {
    yatch: 'LUMAR 70Ft',
    price: '6.000',
    images: [
      { title: 'First item', img: img1 },
      { title: 'Second item', img: img2 },
      { title: 'Third item', img: img3 },
      { title: 'Fourth item', img: img4 },
      { title: 'Fifth item', img: img5 },
    ],
  }

  return (
    <>
      <div className={style.cardContainer}>
        <div className={style.sliderContainer}>
          <Slider className='slider slide'>
            {yatch.images.map((slide, index) => (
              <div
                key={index}
                className={style.imgContainer}>
                <img
                  src={slide.img}
                  alt=''
                  className={style.img}
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className={style.infoContainer}>
          <h3>{yatch.yatch}</h3>
          <div className={style.priceContainer}>
            <FontAwesomeIcon icon={faDollarSign} />
            <p className={style.price}>{yatch.price}</p>
            <small className={style.badge}>USD</small>
          </div>
        </div>
        <Link
          to={`/detail/${yatch.yatch}`}
          className={style.seeMoreBtn}>
          See more
        </Link>
      </div>
    </>
  )
}

export default Card
