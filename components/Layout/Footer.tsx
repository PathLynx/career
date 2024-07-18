// components/Layout/Footer.tsx
export default async function Footer() {
  const currentYear = new Date().getFullYear()
  const copyrightDate = 2024 + (currentYear > 2024 ? `-${currentYear}` : "")
  const copyrightName = "PathLynx LLC"

  return (
    <footer className="bg-opacity-/10 bg-white text-sm text-neutral-400">
      <div className="rounded-custom-footer bg-primary-400 px-10 py-2 text-sm">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-1 px-4 text-black md:flex-row md:gap-0 md:px-4 min-[1320px]:px-0">
          <p className="text-center">
            &copy; {copyrightName}. {copyrightDate}
            {copyrightName.length && !copyrightName.endsWith(".") ? "." : ""} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
