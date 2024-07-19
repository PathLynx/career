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
        Path Map 职业发展路径
      </Heading>
      <iframe
        title="Job Roadmap"
        src={roadmap}
        allowFullScreen
        className={clsx(styles.roadmapIframe, "h-[50vh] w-full")}
      ></iframe>
    </div>
  )
}
