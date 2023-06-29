import { AppState } from "../AppState.js"
import { Sandbox } from "../models/Sandbox.js"
import { api } from "./AxiosService.js"

class SandboxService {

  //take that id, find the correct gift
  //take that gift change opened value on that gift to false
  // put that gift to the api
  //redraw gifts


  async openGift(giftId) {
    const foundGift = AppState.gifts.find(g => g.id == giftId)

    if (!foundGift) {
      throw new Error("INVALID ID")
    }

    const giftData = { opened: true }

    const res = await api.put(`api/gifts/${foundGift.id}`, giftData)

    let giftIndex = AppState.gifts.findIndex(g => g.id == giftId)

    const updateGift = new Sandbox(res.data)

    console.log('opened present', updateGift)

    AppState.gifts.splice(giftIndex, 1, updateGift)

    AppState.emit('gifts')
  }

  async createGift(formData) {
    const res = await api.post('api/gifts', formData)
    console.log(res.data)
    AppState.gifts.unshift(new Sandbox(res.data))
    AppState.emit('gifts')
  }

  async getSandboxGifts() {
    //console.log('sandbox service')
    const res = await api.get('api/gifts')
    //console.log('Got Gifts', res.data)
    // create classy objects using the model with Pojos from api get and store them in the appstate
    const newGifts = res.data.map(pojoGif => new Sandbox(pojoGif))
    AppState.gifts = newGifts
    // console.log(AppState.gifts)
    AppState.emit('gifts')
  }

}

export const sandboxService = new SandboxService()