import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Card from "./elementsProjects/Card";
import { useDivRefsStore } from "@store/store-sections";


export default function Projects() {

  const horizotalPanelsRef = useRef<HTMLDivElement>(null)
  const container = useRef<HTMLDivElement>(null)
  const container_root = useRef<HTMLDivElement>(null)
  const setRefDivs = useDivRefsStore((state) => state.setDivRef)



  useGSAP(() => {
    const sections = gsap.utils.toArray(".panel")
    if (sections.length === 0 || !container_root.current) return
    const newtimeline = gsap.timeline({
      scrollTrigger: {
        trigger: container_root.current,
        start: `top top`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        id: "horizontalsctoll",
      },
      onStart: () => {
        ScrollTrigger.getById("navigation")?.refresh()
        ScrollTrigger.getById("model3d")?.refresh()
      },
      onComplete: () => {
        ScrollTrigger.getById("navigation")?.refresh()
        ScrollTrigger.getById("model3d")?.refresh()
      }
    })
    newtimeline.to(sections, {
      xPercent: -(100 * (sections.length - 1)),
      ease: "none",
      force3D: true,

    })
  }, { dependencies: [horizotalPanelsRef], scope: container })

  useEffect(() => {
    if (container.current) {
      setRefDivs("Projects", container)
    }
  }, [container, setRefDivs])
  return (
    <div
      className="flex flex-col justify-around items-center w-full min-h-screen hidden_overflow-project"
      ref={container_root}
    >
      <div className="w-full flex flex-row justify-center items-center">
        <h1 className="w-[90%] text-white text-4xl 
          font-bold text-center border-b-2 border-t-2 border-dashed">Projects</h1>
      </div>
      <div
        id="Projects"
        className="h-[70%] w-[90%] flex flex-col justify-center"
        ref={container}
      >
        <section
          ref={horizotalPanelsRef}
          className=" flex gap-2"
        >
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </section>
      </div>
    </div>
  )
}

