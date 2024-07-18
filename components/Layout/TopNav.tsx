// components/UI/TopNav.tsx
import Image from "next/image"
import Link from "next/link"

export function TopNav() {
  return (
    <nav className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center py-4">
          <Link href="/" className="inline-block">
            <Image src="/images/logo.svg" alt="Company Logo" width={120} height={40} className="size-auto" />
          </Link>
        </div>
      </div>
    </nav>
  )
}
