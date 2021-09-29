import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "box" ]

  connect() {
    console.log("searchTag_connect!")
  }
  toggle() {
    if (this.boxTarget.style.display == "none") {
      this.boxTarget.style.display = "block"
    } else {
      this.boxTarget.style.display = "none"
    };
  }

  search() {
    const tags = document.getElementsByName("tag")
    const checkedTags = []
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].checked) {
        checkedTags.push(tags[i].value)
      }
    }
    let data = { tagSearch: checkedTags.toString() }
    axios
      .put(`/notes`, data)
      .then((res) => {
        console.log(res.data)
      })
      .catch((error) => console.log(error))
  }
}