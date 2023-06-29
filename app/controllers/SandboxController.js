import { AppState } from "../AppState.js"
import { sandboxService } from "../services/SandboxService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

function _drawGifts() {
  console.log('trying to draw')
  let template = ''
  let gifts = AppState.gifts
  console.log(gifts)
  gifts.forEach(g => template += g.giftTemplate)
  setHTML('giftArea', template)
}

export class SandboxController {
  constructor() {
    console.log('sandbox controller')
    this.getSandboxGifts()
    AppState.on('gifts', _drawGifts)
  }

  async getSandboxGifts() {
    try {
      await sandboxService.getSandboxGifts()
    } catch (error) {
      console.error(error)
      Pop.error(error.message)
    }
  }

  // Take the event make it usable
  // aliasing it out let xyz = event.target
  // let formData = getformdata(xyz)
  // change event to formData


  async createGift(event) {
    event.preventDefault()

    let form = event.target
    let formData = getFormData(form)
    console.log(formData)
    form.reset()

    try {
      await sandboxService.createGift(formData)
    } catch (error) {
      console.error(error)
      Pop.error(error.message)
    }
  }

  async openGift(id) {
    try {
      await sandboxService.openGift(id)
    } catch (error) {
      console.error(error)
      Pop.error(error.message)
    }
  }


}