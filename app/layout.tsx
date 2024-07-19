import { SpeedInsights } from "@vercel/speed-insights/next"
import { Noto_Sans_SC } from "next/font/google"

import Footer from "components/Layout/Footer"
import { TopNav } from "components/Layout/TopNav"

import "styles/tailwind.css"

const notoSansSC = Noto_Sans_SC({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={notoSansSC.className}>
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icons/favicon.ico" sizes="any" />
        <link rel="apple-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <title>PathLynx Careers</title>
      </head>
      <body className="flex min-h-screen flex-col bg-gray-400">
        <TopNav />
        <main className="grow">{children}</main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  )
}
