import Card from '../card/Card'
import style from './list-cards.module.scss'
const ListCards = () => {
  return (
    <>
      <div className={style.containerCards}>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </>
  )
}

export default ListCards
