// types/index.ts

export interface Job {
  slug: string
  title: string
  department: string
  description?: string
  location: string
  responsibilities: string[]
  qualifications: string[]
  extras?: string[]
  roadmap?: string
}
