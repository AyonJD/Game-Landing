// layouts
import MainLayout from '../src/layouts/main'
// material
import { styled } from '@mui/material/styles'
// components
import Page from '../src/components/Page'
import { LandingHero } from '../src/components/_external-pages/landing'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
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
