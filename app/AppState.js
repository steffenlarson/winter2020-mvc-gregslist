import Car from "./Models/Car.js"
import Job from "./Models/Job.js"
import House from "./Models/House.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
// TODO add job and house default?
class AppState extends EventEmitter {
  /** @type {Car[]} */
  cars = [new Car({ make: "Benz", model: "1", year: 1985, price: 10000000, description: "Its old", imgUrl: "https://d1vl6ykwv1m2rb.cloudfront.net/blog/wp-content/uploads/2018/03/20142414/auto-11.jpg" })]
  jobs = [new Job({ company: "Codeworks", jobTitle: "TA", hours: 40, rate: 1, description: "It is a silly place" })]
  houses = [new House({ bedrooms: 4, bathrooms: 2.5, levels: 3, imgUrl: "https://placehold.it/200x200", year: 1999, price: 200000, description: "A fabulous home, built in a tree." })]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
