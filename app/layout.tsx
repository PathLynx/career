import { SpeedInsights } from "@vercel/speed-insights/next"
import clsx from "clsx"
import { Noto_Sans_SC } from "next/font/google"

import "styles/tailwind.css"

const notoSansSC = Noto_Sans_SC({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>PathLynx Careers</title>
      </head>
      <body className={clsx("bg-gray-400", notoSansSC.className)}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
