import Layout from '../../components/layout/Layout'
import image from '../../assets/LUMAR 70Ft/IMG_2535.jpg'
import style from './detail.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faGear } from '@fortawesome/free-solid-svg-icons'
import 'lightbox.js-react/dist/index.css'
import { SlideshowLightbox, initLightboxJS } from 'lightbox.js-react'
import { useEffect } from 'react'
import img1 from '../../assets/LUMAR 70Ft/IMG_2535.jpg'
import img2 from '../../assets/LUMAR 70Ft/IMG_2536.jpg'
import img3 from '../../assets/LUMAR 70Ft/IMG_2537.jpg'
import img4 from '../../assets/LUMAR 70Ft/IMG_2538.jpg'
import img5 from '../../assets/LUMAR 70Ft/IMG_2539.jpg'
import img6 from '../../assets/LUMAR 70Ft/IMG_2540.jpg'
import img7 from '../../assets/LUMAR 70Ft/IMG_2541.jpg'

const Detail = () => {
  useEffect(() => {
    initLightboxJS('Insert License key', 'Insert plan type here')
  })
  return (
    <Layout>
      <div className={style.container}>
        <div className={style.containerImage}>
          <img
            src={image}
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
              <tr>
                <td>
                  <div className={style.itemContainer}>
                    <FontAwesomeIcon
                      icon={faDollarSign}
                      className={style.icon}
                    />
                    <p>
                      <b>6.000</b>{' '}
                    </p>
                    <small className={style.badge}>USD</small>
                  </div>
                </td>
                <td>4 hours</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* <div className={style.detailContainer}>
            <p>Price</p>
            <div className={style.itemContainer}>
              <FontAwesomeIcon
                icon={faDollarSign}
                className={style.icon}
              />
              <p>6.000</p>
              <small className={style.badge}>USD</small>
            </div>
          </div> */}
      </div>
      <div className={style.detailsContainer}>
        <h4 className={style.subtitle}>About it</h4>
        <div className={style.detailContainer}>
          <div className={style.itemContainer}>
            <FontAwesomeIcon
              icon={faGear}
              className={style.icon}
            />
            <p>Mate</p>
          </div>
          <div className={style.itemContainer}>
            <FontAwesomeIcon
              icon={faGear}
              className={style.icon}
            />
            <p>Captain</p>
          </div>
          <div className={style.itemContainer}>
            <FontAwesomeIcon
              icon={faGear}
              className={style.icon}
            />
            <p>Gas</p>
          </div>
          <div className={style.itemContainer}>
            <FontAwesomeIcon
              icon={faGear}
              className={style.icon}
            />
            <p>Floating Matt</p>
          </div>
          <div className={style.itemContainer}>
            <FontAwesomeIcon
              icon={faGear}
              className={style.icon}
            />
            <p>Jetskies for 1 hour</p>
          </div>
        </div>
      </div>
      <div>
        <h4 className={style.subtitle}>About it</h4>
        <div className={style.galleryContainer}>
          <SlideshowLightbox className={`container grid grid-cols-3 gap-2 mx-auto ${style.gallery}`}>
            <img
              className={'w-full rounded'}
              src={img1}
            />
            <img
              className='w-full rounded'
              src={img2}
            />
            <img
              className='w-full rounded'
              src={img3}
            />
            <img
              className='w-full rounded'
              src={img4}
            />
            <img
              className='w-full rounded'
              src={img5}
            />
            <img
              className='w-full rounded'
              src={img6}
            />
            <img
              className='w-full rounded'
              src={img7}
            />
          </SlideshowLightbox>
        </div>
      </div>
    </Layout>
  )
}

export default Detail
