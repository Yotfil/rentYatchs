import Layout from '../../components/layout/Layout'
import style from './detail.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnchor, faGear } from '@fortawesome/free-solid-svg-icons'
import 'lightbox.js-react/dist/index.css'
import { SlideshowLightbox, initLightboxJS } from 'lightbox.js-react'
import { useEffect, useState } from 'react'
import { data } from '../../data/data'
import img1 from '../../assets/LUMAR_70Ft/1.jpg'

import { useLocation } from 'react-router-dom'

const Detail = () => {
  const [dollar, setDollar] = useState(
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    })
  )
  const location = useLocation()
  const [yatchSelected, setYatchSelected] = useState(null)
  useEffect(() => {
    initLightboxJS('Insert License key', 'Insert plan type here')
  })
  useEffect(() => {
    getCurrentItem()
  }, [])

  const getCurrentItem = async () => {
    const [, , category, url] = location.pathname.split('/')
    console.log(category)
    console.log(url)
    console.log(data[category])
    const yatchFinded = data[category].find(yatch => yatch.url === url)
    setYatchSelected(yatchFinded)
    console.log(yatchFinded)
    console.log(yatchSelected, 'this')
  }

  return (
    <Layout>
      <div className={style.container}>
        <div className={style.containerImage}>
          <img
            src={yatchSelected?.mainImage}
            alt=''
            className={style.img}
          />
        </div>
        <div className={style.infoContainer}>
          <h2>LUMAR 70ft</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sint sapiente tenetur nulla culpa excepturi!
            Illo voluptate quas tempore tempora unde expedita excepturi ea qui earum obcaecati. Dolores, mollitia
            quidem?
          </p>
          <button className={style.button}>Book now</button>
        </div>
      </div>
      <div className={style.detailsContainer}>
        <h4 className={style.subtitle}>Prices</h4>
        <div className={style.tableContainer}>
          <table className={style.table}>
            <thead>
              <tr>
                <th>price</th>
                <th>time</th>
              </tr>
            </thead>
            <tbody>
              {yatchSelected?.prices?.map((price, i) => {
                return (
                  <tr key={i}>
                    <td>
                      <div className={style.itemContainerColumn}>
                        <p>
                          <b>{dollar.format(price.price)}</b> <small className={style.badge}>USD</small>
                        </p>
                        {price.days && <p>{price.days}</p>}
                      </div>
                    </td>
                    {price.time ? (
                      <td>{price.time} hours</td>
                    ) : (
                      <td>
                        <a href='#'>Contact Us</a>{' '}
                      </td>
                    )}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className={style.detailsContainer}>
        <h4 className={style.subtitle}>About it</h4>
        <div className={style.detailContainer}>
          {yatchSelected?.aboutIt?.map((item, i) => {
            return (
              <div
                key={i}
                className={style.itemContainer}>
                <FontAwesomeIcon
                  icon={faGear}
                  className={style.icon}
                />
                <p>{item}</p>
              </div>
            )
          })}
        </div>
      </div>
      <div className={style.detailsContainer}>
        <h4 className={style.subtitle}>Location</h4>
        <div className={style.detailContainer}>
          <div className={style.itemContainer}>
            <FontAwesomeIcon
              icon={faAnchor}
              className={style.icon}
            />
            <p>{yatchSelected?.location}</p>
          </div>
        </div>
      </div>
      <div>
        <h4 className={style.subtitle}>Gallery</h4>
        <div className={style.galleryContainer}>
          {yatchSelected && (
            <SlideshowLightbox className={`container grid grid-cols-3 gap-2 mx-auto ${style.gallery}`}>
              {yatchSelected?.gallery?.map((img, i) => {
                return (
                  <img
                    key={i}
                    className={'w-full rounded'}
                    loading='lazy'
                    src={img}
                  />
                )
              })}
            </SlideshowLightbox>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default Detail
