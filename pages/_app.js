// scroll bar
import 'simplebar/dist/simplebar.css'
// editor
import 'react-quill/dist/quill.snow.css'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

// next
import Head from 'next/head'
import { CacheProvider } from '@emotion/react'
// material
// contexts
import { SettingsProvider } from '../src/contexts/SettingsContext'
import { CollapseDrawerProvider } from '../src/contexts/CollapseDrawerContext'
// theme
import ThemeConfig from '../src/theme'
import GlobalStyles from '../src/theme/globalStyles'
// utils
import createEmotionCache from '../src/utils/createEmotionCache'
// components
import RtlLayout from '../src/components/RtlLayout'
import ProgressBar from '../src/components/ProgressBar'
import ThemePrimaryColor from '../src/components/ThemePrimaryColor'
import '../styles/global.css'
import { useEffect, useState } from 'react'
import CustomLoadingScreen from 'src/components/CustomLoadingScreen'

// ----------------------------------------------------------------------

const clientSideEmotionCache = createEmotionCache()

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  const [isLoading, setIsLoading] = useState(true)
  const [loadingStartTime, setLoadingStartTime] = useState(0)

  useEffect(() => {
    setLoadingStartTime(performance.now())
    setTimeout(() => {
      setIsLoading(false)
    }, 5000)
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
    <SettingsProvider>
      <CollapseDrawerProvider>
        <CacheProvider value={emotionCache}>
          <Head>
            <meta
              name="viewport"
              content="initial-scale=1, width=device-width"
            />
          </Head>

          <ThemeConfig>
            <ThemePrimaryColor>
              <RtlLayout>
                <GlobalStyles />
                <ProgressBar />
                <Component {...pageProps} />
              </RtlLayout>
            </ThemePrimaryColor>
          </ThemeConfig>
        </CacheProvider>
      </CollapseDrawerProvider>
    </SettingsProvider>
  )
}
