import { data } from '../../data/data'
import Card from '../card/Card'
import style from './list-cards.module.scss'
const ListCards = () => {
  return (
    <>
      <div className={style.containerCards}>
        {data.yachts.map(yachts => {
          return (
            <Card
              key={yachts.yatchName}
              yachts={yachts}></Card>
          )
        })}
      </div>
    </>
  )
}

export default ListCards
