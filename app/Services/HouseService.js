import { ProxyState } from "../AppState.js";
import House from "../Models/House.js";


class HouseService {
    deleteHouse(id) {
        ProxyState.houses = ProxyState.houses.filter(house => house.id != house)
    }
    createHouse(newHouse) {

        let house = new House(newHouse)

        ProxyState.house = [...ProxyState.house, house]
    }

}

export const houseService = new HouseService()