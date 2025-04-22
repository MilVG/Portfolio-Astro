import Navigation from "./Navigation";
import { Bars4Icon } from "@heroicons/react/24/outline"
import { useState } from "react";
import ButtonContact from "./ButtonContact";

export default function HeaderNavigation() {

  const [visible, setVisible] = useState(false)
  const handleShowPanel = () => {

    if (window.innerWidth <= 640) {
      setVisible(true)
    }
  }

  const stylenavigation = "stylenav navigation_links flex flex-row justify-start items-center lg:gap-4 lg:left-8 lg:justify-center 2xl:justify-start sm:gap-2 w-4/6 relative  sm:left-0 sm:w-full sm:justify-center sm:uppercase xl:left-0 max-sm:gap-4"
  const styleNavList = " max-sm:bg-slate-700 max-sm:border-l-4 max-sm:border-l-cyan-200 max-sm:p-3 max-sm:w-full 2xl:relative 2xl:left-[80px]"
  const styleNavButton = "text-white  hover:text-cyan-600' sm:text-[12px] font-bold lg:text-2xl md:text-lg xl:text-3xl hover:text-slate-300 hover:sm:border-b-2 hover:sm:border-b-slate-600 uppercase cursor-pointer"


  return (
    <div className="
      grid grid-cols-[20%_80%]  sm:grid sm:grid-cols-[25%_60%_15%]
      sm:justify-center items-center md:grid-cols-[12%_72%_16%] 
      md:top-[90px]  z-10 lg:grid-cols-[12%_76%_12%] 
      lg:justify-center lg:items-center lg:top-[100px] 
      xl:top-[105px] max-sm:top-0  top-[90px] sm:top-[80px]
      relative h-20 max-sm:w-full w-[95%]  2xl:w-[90%]">
      <a href="/" className="flex justify-center relative items-center max-sm:relative max-sm:top-5 max-sm:left-2" >
        <img
          className="max-sm:w-9 max-sm:h-9 h-14 w-14 xl:h-20 xl:min-w-20"
          src="/logo/logo_portfolio.svg"
          alt="logo"
          width={80}
          height={80}
        />
      </a>

      <Navigation
        id="nav_root"
        visible={visible}
        setVisible={setVisible}
        style={stylenavigation}
        styleList={styleNavList}
        styleButton={styleNavButton}
      />

      <div className="w-8 h-8 absolute right-4 text-white cursor-pointer top-10 sm:invisible">
        <Bars4Icon onClick={handleShowPanel} />
      </div>
      <ButtonContact
        className="max-sm:invisible"
      />
    </div>
  )
}

