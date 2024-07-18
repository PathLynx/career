import { notFound } from "next/navigation"

import { JobDetails } from "components/Jobs/JobDetails"
import { getJobBySlug } from "lib/api"

export default async function JobDetailsPage({ params }: { params: { slug: string } }) {
  // TODO: Fetch job by slug
  const job = await getJobBySlug(params.slug, true)

  console.log(params.slug)

  if (!job) {
    notFound()
  }

  return (
    <div className="container mx-auto">
      <JobDetails job={job} />
    </div>
  )
}
