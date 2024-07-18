// components/Jobs/JobDetails.tsx
import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"

import { Heading } from "components/UI/Heading"
import { Job } from "types"
import { JobRoadmap } from "./JobRoadmap"

interface JobDetailsProps {
  job: Job
}

export function JobDetails({ job: { title, department, description, requirements, roadmap } }: JobDetailsProps) {
  return (
    <div className="mb-6">
      <div id="header" className="flex h-60 w-full overflow-hidden pl-12">
        <div className="z-10 w-96 py-8 pr-4">
          <Link href="/" className="mb-4 block text-primary-500 hover:underline">
            &larr; Back to all jobs
          </Link>
          <Heading as="h1" className="mb-4 text-3xl font-bold text-gray-900">
            {title}
          </Heading>
          <p className="mb-6 text-xl text-gray-700">{department}</p>
        </div>
        <div className="relative grow">
          <div className="absolute inset-0">
            <Image src="/images/join-us.svg" alt="Join Us" fill style={{ objectFit: "cover", objectPosition: "top" }} />
          </div>
          <div className="absolute right-0 top-0 z-10 -translate-y-1/2">
            <ApplyNowButton showHand />
          </div>
        </div>
      </div>
      <div className="mx-12 rounded-xl bg-white p-10 shadow">
        <div className="mb-6">
          <Heading as="h2" className="mb-4">
            Job Description
          </Heading>
          <p className="mb-6 text-gray-700">{description}</p>
        </div>
        <div className="mb-6">
          <Heading as="h2" className="mb-4">
            Requirements
          </Heading>
          <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
            {requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>
        {roadmap && <JobRoadmap roadmap={roadmap} />}
        <ApplyNowButton />
      </div>
    </div>
  )
}

interface ApplyNowButtonProps {
  showHand?: boolean
}

const ApplyNowButton = ({ showHand = false }: ApplyNowButtonProps) => {
  return (
    <Link href="mailto:jobs@pathlynx.ai" className="relative inline-block">
      <span
        className={clsx(
          "inline-flex items-center rounded-full bg-primary-500 px-10 py-2 text-white",
          "transition-colors hover:bg-primary-600",
          "relative z-10",
          showHand && "right-32 top-44"
        )}
      >
        Apply Now
      </span>
      {showHand && (
        <div className="absolute right-0 top-0 z-20">
          <Image src="/images/hand.svg" alt="Hand" width={165} height={227} />
        </div>
      )}
    </Link>
  )
}
