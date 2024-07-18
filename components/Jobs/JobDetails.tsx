// components/Jobs/JobDetails.tsx
import Link from "next/link"

interface JobDetailsProps {
  title: string
  department: string
  description: string
  requirements: string[]
}

export function JobDetails({ title, department, description, requirements }: JobDetailsProps) {
  return (
    <div>
      <Link href="/" className="mb-4 block text-blue-500 hover:underline">
        &larr; Back to all jobs
      </Link>
      <h1 className="mb-4 text-3xl font-bold">{title}</h1>
      <p className="mb-6 text-xl text-gray-600">{department}</p>
      <div className="rounded-lg bg-white p-6 shadow">
        <h2 className="mb-4 text-2xl font-semibold">Job Description</h2>
        <p className="mb-6">{description}</p>
        <h2 className="mb-4 text-2xl font-semibold">Requirements</h2>
        <ul className="list-disc space-y-2 pl-5">
          {requirements.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
        <button className="mt-8 rounded bg-blue-500 px-6 py-2 text-white transition-colors hover:bg-blue-600">
          Apply Now
        </button>
      </div>
    </div>
  )
}
