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
