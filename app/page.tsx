import { Metadata } from "next"

import { Button } from "components/Button/Button"
import { JobList } from "components/Jobs/JobList"

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

// Mock data - replace with actual API call in a real application
const jobs = [
  { slug: "software-engineer", title: "Software Engineer", department: "Engineering" },
  { slug: "product-manager", title: "Product Manager", department: "Product" },
  { slug: "ux-designer", title: "UX Designer", department: "Design" },
  { slug: "data-scientist", title: "Data Scientist", department: "Data" },
  { slug: "marketing-specialist", title: "Marketing Specialist", department: "Marketing" },
  { slug: "hr-manager", title: "HR Manager", department: "Human Resources" },
]

export default function Home() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto grid max-w-screen-xl px-4 py-8 text-center lg:py-16">
          <div className="mx-auto place-self-center">
            <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
              Join Our Team
            </h1>
            <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
              Discover exciting career opportunities and be part of our mission to innovate and make a difference.
              We&apos;re looking for passionate individuals to join our diverse and dynamic team.
            </p>
            <Button href="#job-listings" className="mr-3">
              View Openings
            </Button>
            <Button href="/about-us" intent="secondary">
              About Us
            </Button>
          </div>
        </div>
      </section>
      <section id="job-listings" className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
          <h2 className="mb-8 text-center text-3xl font-bold dark:text-white">Current Openings</h2>
          <JobList jobs={jobs} />
        </div>
      </section>
    </>
  )
}
