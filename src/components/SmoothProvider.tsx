
import { useEffect, useLayoutEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import Lenis from "lenis";
import { useDivRefsStore } from "@store/store-sections";
import { useTimelineRoot } from "@store/store-timeline-root";
import { useTimelineStore } from "@store/store-timeline-scrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type SmoothProviderProps = {
  children: ReactNode;
};

export const SmoothProvider = ({ children }: SmoothProviderProps) => {

  const smothProviderRef = useRef<HTMLDivElement>(null)
  const sectionsDivRef = useDivRefsStore((state) => state.divRefs)
  const setTimelineRoot = useTimelineRoot((state) => state.setTimeline)
  const timeabout = useTimelineStore((state) => state.timelineAboutSection)
  const triggerModel3d = ScrollTrigger.getById("model3d")

  useEffect(() => {
    const lenis = new Lenis()
    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 2000)
    })

    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
    }

  }, [triggerModel3d]);

  useLayoutEffect(() => {
    ScrollTrigger.normalizeScroll(true)
    if (!sectionsDivRef['Skills']?.current) return
    const SkillRefElement = sectionsDivRef['Skills'].current!
    if (!smothProviderRef.current) return
    const timelineroot = gsap.timeline({
      scrollTrigger: {
        trigger: smothProviderRef.current,
        id: "TriggerSmothProvider",
        endTrigger: SkillRefElement,
      },
    })

    setTimelineRoot(timelineroot)
  }, [timeabout, sectionsDivRef['Skills']])

  return (
    <div ref={smothProviderRef}>
      {children}
    </div>
  );
};
