import { Controller } from "stimulus"
import axios from "axios"



export default class extends Controller {
  static targets = [ "btn" ]
  static values = { id: Number }

  toggle(e) {
    e.preventDefault();
    this.addCollection(this.idValue);
  };
  addCollection(id){
    const url = `/api/v1/notes/${id}/collection`;
    const csrfToken = document.querySelector("meta[name=csrf-token]").content;
    axios.defaults.headers.common["X-CSRF-Token"] = csrfToken;

    axios.post(url)
    .then((res) => {
    const btn = this.btnTarget;
    if (res.data.status === "added") {
      console.log(res.data)
      btn.classList.remove("collection-off")
      btn.classList.add("collection-on")
    } else {
      console.log(res.data)
      btn.classList.remove("collection-on")
      btn.classList.add("collection-off")
      }
    })
    .catch((err) => {
      console.log(err)
    });
  };
};