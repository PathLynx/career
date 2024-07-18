// components/JoinUs.tsx
import Image from "next/image"

import { Button } from "components/Button/Button"

export function JoinUs() {
  return (
    <section className="dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:py-12">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-5 lg:gap-16">
          <div className="order-2 sm:order-1 lg:col-span-3">
            <h1 className="mb-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl xl:text-6xl">
              Join Our Team
            </h1>
            <p className="my-10 font-light dark:text-gray-400 md:text-lg lg:mb-12 lg:text-xl">
              Discover exciting career opportunities and be part of our mission to innovate and make a difference.
              We&apos;re looking for passionate individuals to join our diverse and dynamic team.
            </p>
            <div className="flex flex-col sm:flex-row sm:space-x-4">
              <Button href="#job-listings" className="mb-4 sm:mb-0">
                View Openings
              </Button>
              <Button href="https://www.crunchbase.com/organization/pathlynx" intent="secondary">
                About Us
              </Button>
            </div>
          </div>
          <div className="order-1 sm:order-2 lg:col-span-2">
            <Image
              src="/images/join.png"
              alt="Join our team"
              width={500}
              height={500}
              className="size-full rounded-lg object-cover lg:translate-y-32"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
