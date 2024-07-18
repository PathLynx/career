// components/Jobs/JobCard.tsx
import clsx from "clsx"
import Link from "next/link"

import { Job } from "types"
import { ApplyButton } from "./ApplyButton"
import { JobLocation } from "./JobLocation"

interface JobCardProps {
  job: Job
}

export function JobCard({ job: { slug, title, department, location } }: JobCardProps) {
  return (
    <Link
      href={`/${slug}`}
      className={clsx(
        "group relative block overflow-hidden rounded-[20px] bg-white shadow",
        "transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-white hover:via-[#FFEEE4] hover:to-[#FFC5A5]"
      )}
    >
      <div className="flex items-start justify-between p-6">
        <div>
          <h2 className="mb-2 text-xl font-semibold">{title}</h2>
          <p className="text-gray-600">{department}</p>
        </div>
        <JobLocation location={location} />
      </div>
      <ApplyButton className="absolute bottom-0 right-0" />
    </Link>
  )
}
