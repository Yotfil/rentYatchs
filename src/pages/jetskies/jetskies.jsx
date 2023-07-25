import Layout from '../../components/layout/Layout'
import ListCards from '../../components/list-cards/ListCards'
import style from './jetskies.module.scss'

const Jetskies = () => {
  return (
    <div className={style.container}>
      <Layout title={'Our Jetskies'}>
        <ListCards></ListCards>
      </Layout>
    </div>
  )
}

export default Jetskies
