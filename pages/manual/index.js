import React from 'react'
import Page from '../../src/components/Page'
import { Button, Container, Typography, useMediaQuery } from '@mui/material'
import MainNavbar from 'src/layouts/main/MainNavbar'
import { ButtonAnimate } from 'src/components/animate'

const responsiveIframeStyle = {
  position: 'relative',
  paddingTop: '56.25%',
  overflow: 'hidden',
  marginLeft: 'auto',
}

const ResponsiveIframe = props => {
  return (
    <div style={{ ...responsiveIframeStyle, ...props.style }}>
      <iframe
        {...props}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '70%',
          ...props.style,
        }}
      />
    </div>
  )
}

function Manual() {
  const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down('sm'))
  const isMediumScreen = useMediaQuery(theme =>
    theme.breakpoints.between('md', 'lg')
  )

  const iframeWidth = isSmallScreen ? '100%' : isMediumScreen ? '90%' : '90%'

  const handleDownloadManual = () => {
    const pdfUrl = '/pdf.pdf'
    window.open(pdfUrl, '_blank')
  }

  return (
    <>
      <MainNavbar />
      <Page>
        <Container
          sx={{
            paddingTop: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <ButtonAnimate>
            <Button
              onClick={handleDownloadManual}
              variant="contained"
              color="primary"
            >
              Download Manual
            </Button>
          </ButtonAnimate>

          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
            Watch Our Tutorial Video
          </Typography>

          <ResponsiveIframe
            src="https://www.youtube.com/embed/7CqJlxBYj-M"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              width: iframeWidth,
            }}
          />
        </Container>
      </Page>
    </>
  )
}

export default Manual
