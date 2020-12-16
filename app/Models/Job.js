import { generateId } from "../Utils/GenerateId.js"

export default class Job {
    constructor({ company, jobTitle, hours, rate, description }) {

        this.id = generateId()
        this.company = company
        this.jobTitle = jobTitle
        this.hours = hours
        this.rate = rate
        this.description = description
    }


    get Template() {

    }



}