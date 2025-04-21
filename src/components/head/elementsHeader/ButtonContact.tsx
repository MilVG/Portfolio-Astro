type ButtonContactProps = {
  className?: string
}
const ButtonContact = ({ className }: ButtonContactProps) => {
  return (
    <div className={`flex w-full  sm:relative sm:justify-center lg:h-full lg:justify-center lg:items-center ${className}`}>
      <div className='bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full max-sm:w-1/6 sm:h-8 p-1 h-14 sm:w-full lg:h-2/3  lg:flex lg:justify-center lg:items-center'>
        <button className=' p-2  w-full h-12 text-[10px]  bg-slate-800 rounded-full text-white sm:h-6 sm:text-[10px] sm:uppercase sm:font-bold lg:text-lg lg:h-[95%] md:flex md:justify-center md:items-center lg:flex lg:justify-center lg:items-center 2xl:h-[95%]'>Contact</button>
      </div>
    </div>
  )
}

export default ButtonContact
