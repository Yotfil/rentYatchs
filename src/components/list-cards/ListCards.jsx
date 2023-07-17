import { data } from '../../data/data'
import Card from '../card/Card'
import style from './list-cards.module.scss'
const ListCards = () => {
  return (
    <>
      <div className={style.containerCards}>
        {data.yatch.map(yatch => {
          return (
            <Card
              key={yatch.yatchName}
              yatch={yatch}></Card>
          )
        })}
      </div>
    </>
  )
}

export default ListCards
