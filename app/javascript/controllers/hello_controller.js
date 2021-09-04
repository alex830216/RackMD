// <div data-controller="hello">
//   <h1 data-target="hello.output"></h1>
// </div>

import { Controller } from "stimulus"
import axios from 'axios'

export default class extends Controller {
  static targets = [ "name" ]
  static values = { id: Number }
  
  omg() {
    const csrfToken = document.querySelector("meta[name=csrf-token]").content;
    axios.defaults.headers.common["X-CSRF-Token"] = csrfToken;
  
    let data = { 'note': {
      'title': '',
      'content': ''
    }}

    axios.put(`/notes/${this.idValue}`,data)
    .then(res => {
      console.log(res.data)
    })
    .catch(error => console.error(error));
  }
  

  get name(){
    return this.nameTarget.value
  }

 
}
