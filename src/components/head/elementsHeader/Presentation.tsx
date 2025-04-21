"use client"
import { useEffect, useState } from "react"

export default function Presentation() {

  const presentionsample = "Desarrollador con solida experiencia mas de 4 años, implementando y automatizando sistemas complejos"
  const [presentation, setPresentation] = useState(presentionsample)

  useEffect(() => {

    const updatePath = () => {
      if (window.innerWidth <= 768) {
        setPresentation(presentionsample)
      } else {
        setPresentation(' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')
      }
    }
    window.addEventListener('resize', updatePath)
    updatePath()
    return () => window.removeEventListener('resize', updatePath);

  }, [])
  return (
    <div className="flex w-[70%] h-3/4 top-20 max-sm:top-10 sm:top-12 absolute lg:top-24">
      <div className="basis-[95%] text-white relative max-sm:top-5 top-20 max-sm:space-y-1 space-y-10  p-10 max-sm:p-4 sm:top-0 md:top-10 2xl:p-16">
        <h1 className="text-7xl max-sm:text-lg sm:text-2xl md:text-4xl lg:text-5xl 2xl:text-7xl">
          Hello 👋 my name <br />
          <span className="text-8xl max-sm:text-xl blue-300l font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-yellow-500 sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-8xl">
            is Milton Vergara
          </span>
        </h1>
        <div className="max-sm:text-sm lg:text-xl">{presentation}</div>
      </div>
    </div>
  )
}

