<<<<<<< HEAD
<<<<<<< HEAD
// Visit The Stimulus Handbook for more details 
// https://stimulusjs.org/handbook/introduction
// 
// This example controller works with specially annotated HTML like:
//
=======
>>>>>>> collection CRUD completed
=======
>>>>>>> 02977e8fcda45da261faf3856e05a4562d77eff4
// <div data-controller="hello">
//   <h1 data-target="hello.output"></h1>
// </div>

import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "output" ]

  connect() {
    this.outputTarget.textContent = 'Hello, Stimulus!'
  }
}
