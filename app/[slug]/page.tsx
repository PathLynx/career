import { notFound } from "next/navigation"

import { JobDetails } from "components/Jobs/JobDetails"
import { getJobBySlug } from "lib/api"

export default async function JobDetailsPage({ params }: { params: { slug: string } }) {
  // TODO: Fetch job by slug
  const job = await getJobBySlug(params.slug, true)

  if (!job) {
    notFound()
  }

  return <JobDetails job={job} />
}
