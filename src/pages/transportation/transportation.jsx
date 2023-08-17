import Layout from '../../components/layout/Layout'
import ListCards from '../../components/list-cards/ListCards'
import style from './transportation.module.scss'

const Transportation = () => {
  return (
    <div className={style.container}>
      <Layout title={'Choose Your Transport'}>
        <ListCards></ListCards>
      </Layout>
    </div>
  )
}

export default Transportation
