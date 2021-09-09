import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "box" ]

  connect() {
    console.log("connect")
  }

  toggle() {
    console.log("Box")
    if (this.boxTarget.style.display == "none") {
      this.boxTarget.style.display = "block"
    } else {
    this.boxTarget.style.display = "none"
    };
  }
}