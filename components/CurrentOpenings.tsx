// components/jobs/CurrentOpenings.tsx
import { JobList } from "components/Jobs/JobList"
import { Job } from "types"

interface CurrentOpeningsProps {
  jobs: Job[]
}

export function CurrentOpenings({ jobs }: CurrentOpeningsProps) {
  return (
    <section id="job-listings" className="dark:bg-gray-900">
      <div className="xs:py-8 mx-auto max-w-screen-xl px-4 lg:px-6">
        <h2 className="mb-8 text-3xl font-bold dark:text-white">Current Openings</h2>
        <JobList jobs={jobs} />
      </div>
    </section>
  )
}
