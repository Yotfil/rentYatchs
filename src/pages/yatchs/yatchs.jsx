import Layout from '../../components/layout/Layout'
import ListCards from '../../components/list-cards/ListCards'
import style from './yatchs.module.scss'

const Yatchs = () => {
  return (
    <div className={style.container}>
      <Layout title={'Our Yatchs'}>
        <ListCards></ListCards>
      </Layout>
    </div>
  )
}

export default Yatchs
