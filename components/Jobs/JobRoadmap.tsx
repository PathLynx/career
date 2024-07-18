import clsx from "clsx"
import { Heading } from "components/UI/Heading"
import styles from "./JobRoadmap.module.css"

interface JobRoadmapProps {
  roadmap: string
}

export function JobRoadmap({ roadmap }: JobRoadmapProps) {
  return (
    <div className="mb-6">
      <Heading as="h2" className="mb-4">
        Path Map
      </Heading>
      <iframe
        title="Job Roadmap"
        src={roadmap}
        allowFullScreen
        className={clsx(styles.roadmapIframe, "h-96 w-full")}
      ></iframe>
    </div>
  )
}
