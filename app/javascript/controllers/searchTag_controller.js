import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "box" ]

  connect() {
    console.log("connect")
  }

  btn() {
    console.log("Box")
    let boxIfExist = this.boxTarget.style.display
    if(boxIfExist = "none"){
      boxIfExist = "block"
    } else {
      boxIfExist = "none"
    }
  }
}