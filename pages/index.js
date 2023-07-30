// layouts
import MainLayout from '../src/layouts/main'
// material
import { styled } from '@mui/material/styles'
// components
import Page from '../src/components/Page'
import { LandingHero } from '../src/components/_external-pages/landing'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import CustomLoadingScreen from 'src/components/CustomLoadingScreen'
const AccordionComponent = dynamic(
  () => import('../src/components/_external-pages/landing/Accordion'),
  { ssr: false }
)

// ----------------------------------------------------------------------

const RootStyle = styled(Page)({
  height: '100%',
})

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}))

// ----------------------------------------------------------------------

export default function LandingPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [loadingStartTime, setLoadingStartTime] = useState(0)

  useEffect(() => {
    setLoadingStartTime(performance.now())
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  useEffect(() => {
    if (!isLoading) {
      const loadingEndTime = performance.now()
      const loadingTime = loadingEndTime - loadingStartTime
      console.log(`Loading time: ${loadingTime} ms`)
    }
  }, [isLoading, loadingStartTime])

  if (isLoading) {
    return <CustomLoadingScreen />
  }

  return (
    <MainLayout>
      <RootStyle
        title="The starting point for your next project | Minimal-UI"
        id="move_top"
      >
        <LandingHero />
        <ContentStyle>
          <AccordionComponent />
        </ContentStyle>
      </RootStyle>
    </MainLayout>
  )
}
