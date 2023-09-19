import Slider from 'react-animated-slider'
import 'react-animated-slider/build/horizontal.css'
import style from './card.module.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Card = ({ item }) => {
  const [dollar, setDollar] = useState(
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    })
  )

  return (
    <>
      <div className={style.cardContainer}>
        <div className={style.sliderContainer}>
          <Slider className='slider slide'>
            {item.gallery.map((slide, index) => (
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
        <div className={style.infoContainer}>
          <h3>{item.itemName}</h3>
          <div>
            <div className={style.priceContainer}>
              {/* <FontAwesomeIcon icon={faDollarSign} /> */}
              <p className={style.price}>{dollar.format(item.prices[0].price)}</p>
              <small className={style.badge}>USD</small>
            </div>
            {item.prices[0].time && (
              <div className={style.priceContainer}>
                {/* <FontAwesomeIcon icon={faDollarSign} /> */}
                <p className={style.price}>{item.prices[0].time}</p>
                <small className={style.badge}> hours</small>
              </div>
            )}
          </div>
        </div>
        <Link
          to={`/detail/${item.category}/${item.url}`}
          className={style.seeMoreBtn}>
          See more
        </Link>
      </div>
    </>
  )
}

export default Card
