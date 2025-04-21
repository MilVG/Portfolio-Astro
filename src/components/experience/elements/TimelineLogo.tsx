import { Card } from './Card'
type TimelineLogoProps = {
  date: {
    dateString: string
    dateObj: Date
  }
  index: number
}
export const TimelineLogo = ({ date, index }: TimelineLogoProps) => {

  return (
    <div
      className={`relative 2xl:w-3/5 xl:w-3/4 lg:w-[85%] md:w-[90%] sm:w-full max-sm:w-full 
             p-2 flex flex-row justify-center items-center 
            max-sm:justify-end max-sm:h-[300px] 
            sm:h-[500px]`}>
      <Card index={index} />
      <div className='bg-slate-600 rounded-full p-2 max-sm:w-14 max-sm:h-14 max-sm:absolute max-sm:top-[50px]'>
        <img
          src={"/logo/logo_portfolio.svg"}
          alt='TimelineLogo'
          width={60}
          height={60}
          loading="lazy"
        />
      </div>
      <div className={`absolute  w-2/5 ${index % 2 === 0 ? 'right-0 flex justify-start' : 'left-0 flex justify-end'} max-sm:invisible max-sm:absolute max-sm:left-0 sm:visible`}><p className='text-white font-bold text-3xl'>{date.dateString}</p></div>
    </div>
  )
}

