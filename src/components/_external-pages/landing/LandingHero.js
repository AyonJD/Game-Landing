import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'
import flashFill from '@iconify/icons-eva/flash-fill'
// next
import NextLink from 'next/link'
// material
import { styled } from '@mui/material/styles'
import { Box, Stack, Button, Container, Typography } from '@mui/material'
// routes
//
import {
  varFadeIn,
  varWrapEnter,
  varFadeInRight,
} from '../../animate'
import InfiniteVideo from './InfiniteVideo'

// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.grey[400],
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    display: 'flex',
    position: 'fixed',
    alignItems: 'center',
  },
}))

const ContentStyle = styled(props => <Stack spacing={5} {...props} />)(
  ({ theme }) => ({
    zIndex: 10,
    maxWidth: 520,
    margin: 'auto',
    textAlign: 'center',
    position: 'relative',
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(15),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(14),
      margin: 'unset',
      textAlign: 'left',
    },
  })
)

const HeroOverlayStyle = styled(motion.img)({
  zIndex: 9,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
})

const HeroImgStyle = styled(motion.div)(({ theme }) => ({
  top: 0,
  right: 0,
  zIndex: 8,
  width: '100%',
  margin: 'auto',
  position: 'absolute',
  height: '100vh',
}))

// ----------------------------------------------------------------------

export default function LandingHero() {
  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        <HeroOverlayStyle
          alt="overlay"
          src="/static/overlay.svg"
          variants={varFadeIn}
        />

        <HeroImgStyle>
          <InfiniteVideo />
        </HeroImgStyle>
        <Container
          sx={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
          }}
          maxWidth="lg"
        >
          <ContentStyle>
            <motion.div variants={varFadeInRight}>
              <Typography variant="h1" sx={{ color: 'common.white' }}>
                Download <br />
                the app <br />
                <Typography
                  component="span"
                  variant="h1"
                  sx={{ color: 'primary.main' }}
                >
                  For Free
                </Typography>
              </Typography>
            </motion.div>

            <motion.div variants={varFadeInRight}>
              <Typography sx={{ color: 'common.white' }}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Provident recusandae officia, velit culpa tenetur facilis
                doloremque cupiditate similique id optio!
              </Typography>
            </motion.div>

            <motion.div variants={varFadeInRight}>
              <NextLink href="#">
                <Button
                  size="large"
                  variant="contained"
                  startIcon={<Icon icon={flashFill} width={20} height={20} />}
                >
                  Download The APK
                </Button>
              </NextLink>
            </motion.div>
          </ContentStyle>
        </Container>
      </RootStyle>
      <Box sx={{ height: { md: '100vh' } }} />
    </>
  )
}
