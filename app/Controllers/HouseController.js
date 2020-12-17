import { ProxyState } from "../AppState.js";
import { housesService } from "../Services/HouseService.js";


function _drawHouses() {

  let houses = ProxyState.houses
  let template = ''
  houses.forEach(house => {

    template += house.Template
  })
  document.getElementById('houses').innerHTML = template
}

export default class HousesController {
  constructor() {

    ProxyState.on("houses", _drawHouses)
    _drawHouses()
  }

  createHouse() {
    window.event.preventDefault()

    let form = window.event.target
    let newHouse = {
      bedrooms: form["bedrooms"].value,
      bathrooms: form["bathrooms"].value,
      levels: form["levels"].value,
      imgUrl: form["imgUrl"].value,
      year: form["year"].value,
      price: form["price"].value,
      description: form["description"].value
    }

    housesService.createHouse(newHouse)

    // @ts-ignore
    form.reset()

    // @ts-ignore
    document.getElementById('new-house-modal').modal('hide');
  }

  deleteHouse(id) {
    housesService.deleteHouse(id)
  }
}