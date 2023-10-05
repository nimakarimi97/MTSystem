import { useBreakpoints } from '@vueuse/core'

const breakpoints = useBreakpoints({
  tablet: 640,
  laptop: 1024,
  desktop: 1280,
})

const isMobile = breakpoints.smaller('laptop')
const isLaptop = breakpoints.greaterOrEqual('laptop')

export { isMobile, isLaptop }

