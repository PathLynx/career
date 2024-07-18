import { notFound } from "next/navigation"

import { JobDetails } from "components/Jobs/JobDetails"

// Mock data - replace with actual API call in a real application
const jobDetails = {
  "software-engineer": {
    title: "Software Engineer",
    department: "Engineering",
    description: "We are looking for a talented software engineer to join our team...",
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "3+ years of experience in software development",
      "Proficiency in JavaScript and TypeScript",
    ],
  },
  // Add other job details here...
}

export default function JobDetailsPage({ params }: { params: { slug: string } }) {
  const job = jobDetails[params.slug as keyof typeof jobDetails]

  if (!job) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <JobDetails {...job} />
    </div>
  )
}
