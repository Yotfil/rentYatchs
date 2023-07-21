import Slider from 'react-animated-slider'
import 'react-animated-slider/build/horizontal.css'
import style from './card.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Card = ({ yachts }) => {
  const [dollar, setDollar] = useState(
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    })
  )

  useEffect(() => {
    console.log(yachts, 'this')
    console.log(
      yachts.price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      }),
      'this'
    )
    console.log(dollar.format(yachts.price))
  }, [])

  return (
    <>
      <div className={style.cardContainer}>
        <div className={style.sliderContainer}>
          <Slider className='slider slide'>
            {yachts.gallery.map((slide, index) => (
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
          <h3>{yachts.yatchName}</h3>
          <div className={style.priceContainer}>
            {/* <FontAwesomeIcon icon={faDollarSign} /> */}
            <p className={style.price}>{dollar.format(yachts.price)}</p>
            <small className={style.badge}>USD</small>
          </div>
        </div>
        <Link
          to={`/detail/${yachts.category}/${yachts.url}`}
          className={style.seeMoreBtn}>
          See more
        </Link>
      </div>
    </>
  )
}

export default Card
