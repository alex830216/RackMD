import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "sidebar" ]
  static values = { }

  toggle(){
      this.sidebarTarget.classList.toggle("open")
  }
}