import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "box" ]

  toggle() {
    if (this.boxTarget.style.display == "none") {
      this.boxTarget.style.display = "block"
    } else {
      this.boxTarget.style.display = "none"
    };
  }

  check() {
    
  }
}