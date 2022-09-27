import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return <>
    <DefaultSeo
      additionalLinkTags={[
        {
          rel: "apple-touch-icon",
          href: "/apple-touch-icon.png",
          sizes: "180x180"
        }, {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png"
        }, {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png"
        },
        {
          rel: "manifest",
          href: "/site.webmanifest"
        }, {
          rel: "mask-icon",
          href: "/safari-pinned-tab.svg",
          color: "#5bbad5"
        }
      ]}
      additionalMetaTags={[
        {
          name: "msapplication-TileColor",
          content: "#da532c"
        }, {
          name: "theme-color",
          content: "#000000"
        }
      ]}
      openGraph={{
        images: [
          {
            url: "https://coder2195.vercel.app/android-chrome-384x384.png",
            width: 384,
            height: 384,
            type: "image/png"
          }
        ],
        site_name: "Coder2195's Website"
      }}

    />
    <Component {...pageProps} />
  </>
}

export default MyApp
