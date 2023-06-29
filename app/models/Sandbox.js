export class Sandbox {
  constructor(data) {
    this.id = data._id
    this.tag = data.tag
    this.url = data.url
    this.opened = data.opened
    this.creatorId = data.creatorId
  }

  get giftTemplate() {
    return `
    <div class=" col-3 card selectable mx-1 mb-5"  onclick="app.SandboxController.openGift('${this.id}')">
    ${this.computeOpened}
      <p class="card-text">${this.tag}</p>
    </div>
  </div>
    `
  }

  get computeOpened() {
    if (!this.opened) {
      return `
      <img
      src="https://dodo.ac/np/images/3/38/Present_NH_Inv_Icon.png"
      class="card-img-top" alt="...">
      `
    } else {
      return `
      <img
      src="${this.url}"
      class="card-img-top" alt="...">
      `
    }
  }

}

// https://media1.giphy.com/media/977YesTjNfQC7vQiph/giphy.gif?cid=6c09b952hnipnxxncr4lvv6aru0bbxptspvl9x3fu0l36a57&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g

// let = gifModel
// {
//   "_id": "6478c25d5bdd4f203d49d35e",
//   "tag": "random post test",
//   "url": "https://24.media.tumblr.com/d091b15b169d7c6499d536df4a521e13/tumblr_n5vnjgAbKD1tu7965o1_500.gif",
//   "opened": true,
//   "creatorId": "646424169346a51b7a721e71",
//   "createdAt": "2023-06-01T16:07:57.410Z",
//   "updatedAt": "2023-06-01T16:08:00.681Z",
//   "__v": 0,
//   "id": "6478c25d5bdd4f203d49d35e"
// }