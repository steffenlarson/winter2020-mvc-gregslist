import { ProxyState } from "../AppState.js";
import Job from "../Models/Job.js"


class JobsService {
    deleteJob(id) {
        ProxyState.jobs = ProxyState.jobs.filter(job => job.id != id)
    }
    createJob(newJob) {

        let job = new Job(newJob)

        ProxyState.job = [...ProxyState.jobs, job]
    }

}

export const jobService = new JobService()