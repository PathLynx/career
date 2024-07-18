// components/Jobs/JobLocation.tsx
import LocationIcon from "components/Icons/LocationIcon"

interface JobLocationProps {
  location: string
}

export function JobLocation({ location }: JobLocationProps) {
  return (
    <p className="flex items-center justify-end font-semibold uppercase text-primary-400">
      <LocationIcon className="mr-2" />
      {location}
    </p>
  )
}
