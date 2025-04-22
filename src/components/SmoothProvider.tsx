
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
    const lenis = new Lenis({
      duration: 3,
    })
    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
    }

  }, [triggerModel3d]);

  useLayoutEffect(() => {
    if (!sectionsDivRef['Projects']?.current) return
    const projectElement = sectionsDivRef['Projects'].current!
    if (!smothProviderRef.current) return
    const timelineroot = gsap.timeline({
      scrollTrigger: {
        trigger: smothProviderRef.current,
        id: "TriggerSmothProvider",
        endTrigger: projectElement,
      },
    })

    setTimelineRoot(timelineroot)
  }, [timeabout, sectionsDivRef['Projects']])

  return (
    <div ref={smothProviderRef}>
      {children}
    </div>
  );
};
