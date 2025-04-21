import { useDivRefsStore } from "@store/store-sections"
import { useEffect, useRef, type ReactNode } from "react"


type childrenProp = {
  children: ReactNode
}

export const SectionRoot = ({ children }: childrenProp) => {

  const indexdivroot = useRef<HTMLDivElement>(null)
  const setDivRef = useDivRefsStore((state) => state.setDivRef)

  useEffect(() => {
    if (indexdivroot.current) {
      setDivRef("indexdivroot", indexdivroot);
    }
  }, [indexdivroot, setDivRef])
  return (
    <div ref={indexdivroot} className="h-auto w-full">
      {children}
    </div>
  )
}
