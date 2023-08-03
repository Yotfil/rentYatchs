import { useLocation } from 'react-router-dom'
import { data } from '../../data/data'
import Card from '../card/Card'
import style from './list-cards.module.scss'
import { useEffect, useState } from 'react'

const ListCards = () => {
  const location = useLocation()
  const [pathname, setPathname] = useState(null)
  const [cardList, setCardList] = useState([])

  useEffect(() => {
    getCurrentLocation()
  }, [])
  const getCurrentLocation = () => {
    const currentLocation = location.pathname.replace('/', '')
    setPathname(currentLocation)
  }

  const getCurrentCardsToShow = () => {
    if (pathname === 'yachts') {
      setCardList(data.yachts)
    }
  }

  return (
    <>
      {pathname === '' ? (
        <>
          <div>
            <div className={style.containerCards}>
              {data.yachts.map(yachts => {
                return (
                  <Card
                    key={yachts.itemName}
                    item={yachts}></Card>
                )
              })}
            </div>
            <h2 className={style.subTitle}>Do you need transportation?</h2>
            <div className={style.containerCards}>
              {data.transportation.map(t => {
                return (
                  <Card
                    key={t.itemName}
                    item={t}></Card>
                )
              })}
            </div>
            <h2 className={style.subTitle}>You will also be interested</h2>
            <div className={style.containerCards}>
              {data.jetskies.map(jetski => {
                return (
                  <Card
                    key={jetski.itemName}
                    item={jetski}></Card>
                )
              })}
            </div>
          </div>
        </>
      ) : (
        <div className={style.containerCards}>
          {pathname === 'yachts' ? (
            data.yachts.map(yachts => {
              return (
                <Card
                  key={yachts.itemName}
                  item={yachts}></Card>
              )
            })
          ) : pathname === 'transportation' ? (
            data.transportation.map(t => {
              return (
                <Card
                  key={t.itemName}
                  item={t}></Card>
              )
            })
          ) : pathname === 'jetskies' ? (
            data.jetskies.map(jetski => {
              return (
                <Card
                  key={jetski.itemName}
                  item={jetski}></Card>
              )
            })
          ) : (
            <></>
          )}
        </div>
      )}
    </>
  )
}

export default ListCards
