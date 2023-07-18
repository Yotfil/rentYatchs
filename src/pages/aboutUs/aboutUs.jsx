import Layout from '../../components/layout/Layout'
import style from './aboutUs.module.scss'

const AboutUs = () => {
  return (
    <div className={style.container}>
      <Layout title={'About us'}>
        <h1>Hello world from about us</h1>
      </Layout>
    </div>
  )
}

export default AboutUs
