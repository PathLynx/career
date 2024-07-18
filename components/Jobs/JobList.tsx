// components/Jobs/JobList.tsx
import { JobCard } from './JobCard'

interface Job {
  slug: string
  title: string
  department: string
}

interface JobListProps {
  jobs: Job[]
}

export function JobList({ jobs }: JobListProps) {
  return (
    <ul className="space-y-4">
      {jobs.map((job) => (
        <JobCard key={job.slug} {...job} />
      ))}
    </ul>
  )
}
