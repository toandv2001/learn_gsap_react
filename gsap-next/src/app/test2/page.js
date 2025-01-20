import { HeroParallaxDemo } from '@/components/ui/hero-parallax'
import { StickyScrollRevealDemo } from '@/components/ui/sticky-scroll-reveal'
import { TimelineDemo } from '@/components/ui/timeline'
import { WobbleCardDemo } from '@/components/ui/wobble-card'
import React from 'react'


export default function TestPage2() {
  return (
  <>
  <div><HeroParallaxDemo/></div>
  <div><StickyScrollRevealDemo/></div>
  <div><WobbleCardDemo/></div>
  <div><TimelineDemo/></div>
  </>
  )
}