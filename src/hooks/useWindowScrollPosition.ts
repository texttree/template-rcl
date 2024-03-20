import { useCallback, useLayoutEffect, useState } from 'react'
import { ScrollPosition } from '../types'

export function useWindowScrollPosition(): ScrollPosition {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({ x: 0, y: 0 })

  const updatePosition = useCallback(() => {
    setScrollPosition({ x: window.scrollX, y: window.scrollY })
  }, [])

  useLayoutEffect(() => {
    const handleScroll = updatePosition
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [updatePosition])

  return scrollPosition
}
