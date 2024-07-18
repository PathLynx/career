// components/Jobs/JobList.tsx
import { Job } from "types"
import { JobCard } from "./JobCard"

interface JobListProps {
  jobs: Job[]
}

export function JobList({ jobs }: JobListProps) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {jobs.map((job) => (
        <JobCard key={job.slug} job={job} />
      ))}
    </div>
  )
}
