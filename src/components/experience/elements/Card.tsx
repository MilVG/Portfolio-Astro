import styles from './styles-experience.module.css'
import { useEffect, useState } from 'react'

type CardPropsT = {
  index: number
}
export const Card = ({ index }: CardPropsT) => {

  const [positionCard, setPositionCard] = useState<boolean>(true)

  useEffect(() => {
    const updatePath = () => {
      if (window.innerWidth < 640) {
        setPositionCard(true)
      } else {
        setPositionCard(false)
      }
    }

    window.addEventListener('resize', updatePath)
    updatePath()
    return () => window.removeEventListener('resize', updatePath);
  }, [])

  const distributionCard = () => {

    let stylescard = ""
    if (positionCard === true) {
      stylescard = `${styles.cardLeft}`
    } else {
      stylescard = `${index % 2 === 0 ? `${styles.cardLeft}` : `${styles.cardRigth}`}`
    }

    return stylescard
  }
  return (
    <div className={`${distributionCard()}`}>
      <div className='flex flex-col justify-center items-start p-5'>
        <div><h1 className='text-2xl text-white font-bold uppercase'> Job Developer</h1></div>
        <div><h3 className='text-lg text-purple-600'>example</h3></div>
        <div ><p className='text-sm font-bold text-slate-800'>Lorem Ipsufsfddjdj de las rtfe te de las tre aye de los an de ter anca ders  trt terndrs catefir</p></div>
      </div>
    </div>
  )
}

