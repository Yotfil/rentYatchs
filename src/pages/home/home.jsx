import Layout from '../../components/layout/Layout'
import ListCards from '../../components/list-cards/ListCards'
import style from './home.module.scss'

const Home = () => {
  return (
    <>
      <div className={style.banner}></div>
      <Layout title={'The best experience'}>
        <div className={style.advantages}>
          <div>
            <h4>Lorem ipsum</h4>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam obcaecati repudiandae, error, impedit
            maiores magni ad itaque, esse odio consequatur rem{' '}
          </div>
          <div>
            <h4>Lorem ipsum</h4>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam obcaecati repudiandae, error, impedit
            maiores magni ad itaque, esse odio consequatur rem{' '}
          </div>
          <div>
            <h4>Lorem ipsum</h4>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam obcaecati repudiandae, error, impedit
            maiores magni ad itaque, esse odio consequatur rem{' '}
          </div>
        </div>

        <ListCards></ListCards>
      </Layout>
    </>
  )
}

export default Home
