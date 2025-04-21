import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';

export default function AccessDownloadCv() {

  return (
    <div className="flex flex-row justify-center gap-2 items-center w-1/2 h-20 
      rounded-2xl absolute bottom-[70px]
      bg-gradient-to-r from-cyan-500 to-green-600
      max-sm:bottom-0 max-sm:w-1/2 max-sm:h-11
      sm:bottom-0 sm:h-16
      md:w-1/4 md:left-[105px]
      lg:bottom-0 lg:h-20 lg:left-[116px]
      xl:h-[90px] xl:left-[155px]
      2xl:left-[184px] 2xl:h-[92px]">
      <button className=" text-black font-bold text-xl max-sm:text-sm">
        Get in Touch
      </button>
      <ArrowRightCircleIcon className=" text-black size-8" />
    </div>
  )
}

