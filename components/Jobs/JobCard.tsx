// components/Jobs/JobCard.tsx
import Link from "next/link"

interface JobCardProps {
  slug: string
  title: string
  department: string
}

export function JobCard({ slug, title, department }: JobCardProps) {
  return (
    <li className="rounded-lg bg-white p-4 shadow">
      <Link href={`/${slug}`} className="block hover:bg-gray-50">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-600">{department}</p>
      </Link>
    </li>
  )
}
