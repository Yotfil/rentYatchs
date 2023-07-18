import Layout from '../../components/layout/Layout'
import ListCards from '../../components/list-cards/ListCards'
import style from './home.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  return (
    <>
      <div className={style.banner}></div>
      <Layout title={'The best experience'}>
        <div className={style.advantages}>
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
            <p>Chill and private strolls drinks and yummy eats on board the coolest fleet selection</p>
          </div>
        </div>

        <ListCards></ListCards>
      </Layout>
    </>
  )
}

export default Home
