import Layout from '../../components/layout/Layout'
import style from './detail.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnchor, faArrowLeft, faGear, faUsers } from '@fortawesome/free-solid-svg-icons'
import 'lightbox.js-react/dist/index.css'
import { SlideshowLightbox, initLightboxJS } from 'lightbox.js-react'
import { useEffect, useState } from 'react'
import { data } from '../../data/data'

import { useLocation, useNavigate } from 'react-router-dom'

const Detail = () => {
  const [dollar, setDollar] = useState(
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    })
  )
  const location = useLocation()
  const navidate = useNavigate()
  const [itemSelected, setItemSelected] = useState(null)
  useEffect(() => {
    initLightboxJS('Insert License key', 'Insert plan type here')
  })
  useEffect(() => {
    getCurrentItem()
  }, [])

  const getCurrentItem = async () => {
    const [, , category, url] = location.pathname.split('/')
    const itemFinded = data[category].find(item => item.url === url)
    setItemSelected(itemFinded)
  }

  const goBack = () => {
    navidate(-1)
  }

  return (
    <Layout>
      <div className={style.mainContainer}>
        <div>
          <button
            className={style.backbtn}
            onClick={goBack}>
            <FontAwesomeIcon
              icon={faArrowLeft}
              className={style.backIcon}
            />
            <span>back</span>
          </button>
        </div>
        <div className={style.container}>
          <div className={style.containerImage}>
            <img
              src={itemSelected?.mainImage}
              alt=''
              className={style.img}
            />
          </div>
          <div className={style.infoContainer}>
            <h2>{itemSelected?.itemName}</h2>
            <p>{itemSelected?.description}</p>
            <a
              href='#'
              className={style.button}>
              Book now
            </a>
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
                {itemSelected?.prices?.map((price, i) => {
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
                        <td>
                          {price.time} {price.time > 1 ? 'hours' : 'hour'}
                        </td>
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
        {itemSelected?.capacity ? (
          <div className={style.detailsContainer}>
            <h4 className={style.subtitle}>Capacity</h4>
            <div className={style.detailContainer}>
              <div className={style.itemContainer}>
                <FontAwesomeIcon
                  icon={faUsers}
                  className={style.icon}
                />
                <p>{itemSelected.capacity} passengers</p>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}

        <div className={style.detailsContainer}>
          <h4 className={style.subtitle}>Includes</h4>
          <div className={style.detailContainer}>
            {itemSelected?.aboutIt?.map((item, i) => {
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
        {itemSelected?.location && (
          <div className={style.detailsContainer}>
            <h4 className={style.subtitle}>Location</h4>
            <div className={style.detailContainer}>
              <div className={style.itemContainer}>
                <FontAwesomeIcon
                  icon={faAnchor}
                  className={style.icon}
                />
                <p>{itemSelected?.location}</p>
              </div>
            </div>
          </div>
        )}
        <div>
          <h4 className={style.subtitle}>Gallery</h4>
          <div className={style.galleryContainer}>
            {itemSelected && (
              <SlideshowLightbox className={`container grid grid-cols-3 gap-2 mx-auto ${style.gallery}`}>
                {itemSelected?.gallery?.map((img, i) => {
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
      </div>
    </Layout>
  )
}

export default Detail
