import { JOBS } from "data/jobs"

// lib/api.ts
export async function getJobs() {
  // Fetch jobs from your API
  // Return an array of job objects
}

export async function getJobBySlug(slug: string, dummy: boolean = false) {
  // Fetch specific job from your API
  // Return a job object or null if not found
  if (dummy) {
    return JOBS.find((job) => job.slug === slug) || null
  }
}
