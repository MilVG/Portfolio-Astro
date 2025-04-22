import { useRef, type Dispatch, type SetStateAction } from 'react'
import { XMarkIcon } from "@heroicons/react/24/outline"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useDivRefsStore } from '@store/store-sections'
import { useTimelineStore } from '@store/store-timeline-scrollTrigger'
import { useTimelineProjectStore } from '@store/store-timeline-projects'
import { useTimelineNavigation } from '@store/store-timeline-havigation'


type RutesPage = {
  id: number
  name: string
}
const pages: RutesPage[] = [
  { id: 1, name: 'About-Me' },
  { id: 2, name: 'Skills' },
  { id: 3, name: 'Experience' },
  { id: 4, name: 'Projects' },
]

type ShowHideNavigationProps = {
  id: string
  visible: boolean
  setVisible: Dispatch<SetStateAction<boolean>>
  style: string
  styleList: string
  styleButton: string
}

const Navigation = ({ id, visible, setVisible, style, styleList, styleButton }: ShowHideNavigationProps) => {
  const timelineAboutSection = useTimelineStore((state) => state.timelineAboutSection)
  const timelineProjectSection = useTimelineProjectStore((state) => state.timelineProjectsSection)

  const setTimelineNav = useTimelineNavigation((state) => state.setTimeline)

  const sectionsDivRef = useDivRefsStore((state) => state.divRefs)
  const navsection = useRef<HTMLDivElement>(null)


  const handleCloseMenu = () => {
    setVisible(false)
  }

  useGSAP(() => {
    if (!navsection.current || !sectionsDivRef['Skills']?.current) return
    const SkillRefElement = sectionsDivRef['Skills'].current!
    const newrstimeline = gsap.timeline()
    newrstimeline.to(navsection.current, {
      scrollTrigger: {
        trigger: navsection.current,
        start: "top top",
        endTrigger: SkillRefElement,
        end: "bottom bottom",
        pinSpacing: false,
        pin: true,
        anticipatePin: 1,
        scrub: 3,
        toggleClass: "stylenav",
        markers: true,
        id: "navigation",
        onEnter: () => {
          navsection.current?.classList.add("bg-white/30", "backdrop-blur-sm", "rounded-3xl")
        },
        onLeaveBack: () => {
          navsection.current?.classList.remove("bg-white/30", "backdrop-blur-sm")
        },
      },
      onStart: () => {
        ScrollTrigger.getById("horizontalsctoll")?.refresh()
      }

    })
    setTimelineNav(newrstimeline)
  }, { dependencies: [navsection, sectionsDivRef['Skills']] })

  const handleToSection = (name: string) => {

    const aboutRef = sectionsDivRef['About-Me']
    const skillRef = sectionsDivRef['Skills']
    const experienceRef = sectionsDivRef['Experience']
    const projectsRef = sectionsDivRef['Projects']


    if (!aboutRef?.current || !skillRef.current || !experienceRef.current || !projectsRef.current) return

    const hrefsection = gsap.timeline();
    const aboutMeSection = document.getElementById("About-Me");

    const inactiveAboutSection = () => {
      if (timelineAboutSection && aboutMeSection) {
        timelineAboutSection.scrollTrigger?.disable(); // Desactiva el ScrollTrigger
        timelineAboutSection.pause(); // Pausa el timeline
        aboutMeSection.classList.remove("h-[500vh]");
        aboutMeSection.classList.add("h-[100vh]");
      }

    }

    const activeAboutSection = () => {
      aboutRef.current?.classList.remove("h-[100vh]");
      aboutRef.current?.classList.add("h-[500vh]");
      // Reactivar ambos ScrollTriggers
      if (timelineAboutSection?.scrollTrigger) {
        // Habilitar About-Me pero asegurarte de no alterar el scroll actual
        const currentScroll = window.scrollY; // Guardar posición actual del scroll
        timelineAboutSection.scrollTrigger.enable(false); // Habilitar sin sincronizar
        window.scrollTo(0, currentScroll); // Restaurar posición actual
      }

    }

    if (aboutRef.current.id === name) {
      hrefsection.to(window, { duration: 2, scrollTo: aboutRef.current })
      if (timelineAboutSection && aboutMeSection) {
        timelineAboutSection.scrollTrigger?.enable(); // Desactiva el ScrollTrigger
        aboutMeSection.classList.remove("h-[100vh]");
        aboutMeSection.classList.add("h-[500vh]");
      }
    }
    if (skillRef.current.id === name) {
      inactiveAboutSection()
      hrefsection.to(window,
        {
          duration: 2,
          scrollTo: skillRef.current,
          onComplete: () => {
            activeAboutSection()
          }
        })
    }

    if (experienceRef.current.id === name) {

      inactiveAboutSection()
      hrefsection.to(window,
        {
          duration: 2,
          scrollTo: experienceRef.current,
          onComplete: () => {
            activeAboutSection()
          }
        })
    }

    if (projectsRef.current.id === name) {
      inactiveAboutSection()
      hrefsection.to(window,
        {
          duration: 2,
          scrollTo: projectsRef.current,
          onComplete: (() => {
            aboutRef.current?.classList.remove("h-[100vh]");
            aboutRef.current?.classList.add("h-[500vh]");
            // Reactivar ambos ScrollTriggers
            if (timelineProjectSection?.scrollTrigger) {
              timelineProjectSection.scrollTrigger.enable(); // Habilita el ScrollTrigger de Projects
            }
            if (timelineAboutSection?.scrollTrigger) {
              // Habilitar About-Me pero asegurarte de no alterar el scroll actual
              const currentScroll = window.scrollY; // Guardar posición actual del scroll
              timelineAboutSection.scrollTrigger.enable(false); // Habilitar sin sincronizar
              window.scrollTo(0, currentScroll); // Restaurar posición actual
            }
          })
        }
      )

    }

    setVisible(false)
  }
  return (
    <div
      ref={navsection}
      id={id}
      className={` ${visible === true ? 'max-sm:visible navigationactive' : 'max-sm:invisible'} ${style} `}
    >
      <div className={` w-full flex flex-row justify-end mt-4 p-4 cursor-pointer sm:invisible sm:absolute`}>
        <XMarkIcon className='w-8 h-8' onClick={handleCloseMenu} />
      </div>
      {pages.map(page => (
        <ul
          key={page.id}
          property="list"
          className={styleList}>
          <button
            key={page.id}
            className={styleButton}
            onClick={() => handleToSection(page.name)}
          >
            {page.name}
          </button>
        </ul>
      ))}
    </div>
  )
}
export default Navigation
