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

const BENEFITS = ["五险一金", "弹性工作制度", "做四休三（周三居家办公）", "不打卡", "免费AI培训", "技术培训和发展机会"]

export function JobDetails({
  job: { title, department, description, responsibilities, qualifications, extras, roadmap },
}: JobDetailsProps) {
  return (
    <div className="mb-6">
      <div id="header" className="relative flex h-56 w-full overflow-y-hidden pl-12">
        <div className="z-20 w-80 py-16 pr-4">
          <Link href="/" className="mb-4 block text-primary-500 hover:underline">
            &larr; Back to all jobs
          </Link>
          <Heading as="h1" className="mb-4 whitespace-nowrap text-3xl font-bold text-gray-900">
            {title}
          </Heading>
          <p className="mb-6 text-xl text-gray-700">{department}</p>
        </div>
        <div className="relative flex grow">
          <div className="absolute inset-0 hidden md:block">
            <Image src="/images/join-us.svg" alt="Join Us" className="object-cover object-left-bottom" fill />
          </div>
          <div className="absolute left-1/2 top-0 hidden -translate-x-1/2 lg:block">
            <Image src="/images/top.svg" alt="top" className="object-top" width={100} height={50} />
          </div>
          <div className="absolute -bottom-1/4 left-1/4 hidden w-1/3 lg:block">
            <Image src="/images/bottom.svg" alt="bottom" className="object-bottom" width={130} height={180} />
          </div>
          <div className="absolute -top-6 right-0">
            <ApplyNowButton showHand />
          </div>
        </div>
      </div>
      <div className="container mx-auto w-11/12 rounded-xl bg-white p-[8%] shadow">
        <div className="mb-6">
          <Heading as="h2" className="mb-4">
            Job Description 岗位描述
          </Heading>
          <p className="mb-6 text-gray-700">{description}</p>
        </div>
        <div className="mb-6">
          <Heading as="h2" className="mb-4">
            Responsibilities 岗位职责
          </Heading>
          <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
            {responsibilities.map((res, index) => (
              <li key={index}>{res}</li>
            ))}
          </ul>
        </div>
        <div className="mb-6">
          <Heading as="h2" className="mb-4">
            Qualifications 岗位要求
          </Heading>
          <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
            {qualifications.map((qua, index) => (
              <li key={index}>{qua}</li>
            ))}
          </ul>
        </div>
        {extras && (
          <div className="mb-6">
            <Heading as="h2" className="mb-4">
              Extras 加分项
            </Heading>
            <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
              {extras.map((extra, index) => (
                <li key={index}>{extra}</li>
              ))}
            </ul>
          </div>
        )}
        {roadmap && <JobRoadmap roadmap={roadmap} />}
        <div className="mb-6">
          <Heading as="h2" className="mb-4">
            Benefits 福利待遇
          </Heading>
          <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
            {BENEFITS.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>
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
          "inline-flex items-center rounded-full",
          "whitespace-nowrap bg-primary-500 px-10 py-2 text-white",
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
