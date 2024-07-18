import { Metadata } from "next"

import { CurrentOpenings } from "components/CurrentOpenings"
import { JoinUs } from "components/JoinUs"
import { JOBS } from "data/jobs"

export const metadata: Metadata = {
  title: "Career Opportunities",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://your-careers-site.com/",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://your-careers-site.com/career-opportunities-image.png",
      },
    ],
  },
}

export default function Home() {
  return (
    <>
      <JoinUs />
      <CurrentOpenings jobs={JOBS} />
    </>
  )
}
