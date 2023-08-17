import Layout from '../../components/layout/Layout'
import ListCards from '../../components/list-cards/ListCards'
import style from './yachts.module.scss'

const Yachts = () => {
  return (
    <div className={style.container}>
      <Layout title={'Choose Your Yacht'}>
        <ListCards></ListCards>
      </Layout>
    </div>
  )
}

export default Yachts
