// types/index.ts

export interface Job {
  slug: string
  title: string
  department: string
  description?: string
  location: string
  requirements: string[]
  roadmap?: string
}
