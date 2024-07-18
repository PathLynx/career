// components/Jobs/ApplyButton.tsx
import clsx from "clsx"
import RightArrowIcon from "components/Icons/RightArrowIcon"

interface ApplyButtonProps {
  className?: string
}

export function ApplyButton({ className }: ApplyButtonProps) {
  return (
    <button
      type="button"
      className={clsx(
        "flex items-center rounded-tl-full bg-primary-400 py-2 pl-6 pr-4 text-white",
        "opacity-0 transition-opacity duration-300 group-hover:opacity-100",
        className
      )}
    >
      Apply Now <RightArrowIcon className="ml-2" />
    </button>
  )
}
