import Layout from '../../components/layout/Layout'
import ListCards from '../../components/list-cards/ListCards'
import style from './home.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown, faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className={style.banner}>
        <div className={style.containerText}>
          <p>Live the best experience</p>
          <div className={style.containerButtons}>
            <div className={style.containerButtonsText}>
              {/* <Link
                className={style.button}
                to={'/yachts'}>
                Take a look at our yachts.
              </Link> */}
              <Link
                to={'/yachts'}
                className={`${style.button} ${style.buttonRed}`}>
                Choose your yacht
              </Link>
            </div>
            <a href='#yachts'>
              <FontAwesomeIcon
                className={style.iconArrow}
                icon={faAnglesDown}
              />
            </a>
          </div>
        </div>
      </div>
      <Layout>
        <div
          className={style.advantages}
          id='yachts'>
          <div className={style.advantage}>
            <FontAwesomeIcon
              className={style.iconAdvantage}
              icon={faStar}
            />
            <h4>Tailor-Made Plans</h4>
            <p>
              We've got you covered in finding the ideal package that fits your needs and delivers an unforgettable
              experience.
            </p>
          </div>
          <div className={style.advantage}>
            <FontAwesomeIcon
              className={style.iconAdvantage}
              icon={faStar}
            />
            <h4>Best Price Guaranteed</h4>
            <p>We offer unbeatable and exclusive prices as we represent the owners of the boats.</p>
          </div>
          <div className={style.advantage}>
            <FontAwesomeIcon
              className={style.iconAdvantage}
              icon={faStar}
            />
            <h4>Awesome Customer Service</h4>
            <p>
              We guaranteed our clients the best customer service & professional staff that are going to help you have
              an unforgettable time with family or love ones.
            </p>
          </div>
        </div>

        <ListCards></ListCards>
      </Layout>
    </>
  )
}

export default Home
