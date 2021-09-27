import { Controller } from "stimulus"
let debounce = require("lodash/debounce")
import axios from "axios"
export default class extends Controller {
  static targets = ["name"]
  static values = { id: String }
  initialize() {
    this.updateValue = debounce(this.updateValue, 500).bind(this)
  }

  updateValue() {
    const csrfToken = document.querySelector("meta[name=csrf-token]").content
    axios.defaults.headers.common["X-CSRF-Token"] = csrfToken

    const contentNode = document.querySelectorAll('span[role="presentation"]');
    const contentText = [];
    [].forEach.call(contentNode, function(node) {
      contentText.push(node.innerText)
    });

    const content = contentText.toString()
    const editorContent = document.querySelector(".md-editor-preview")

    const title =
      editorContent.firstChild.nodeName === "H1"
        ? editorContent.firstChild.innerText
        : "Untitled"
    let data = { note: { title, content } }
    axios
      .put(`/notes/${this.idValue}`, data)
      .then((res) => {
        console.log(res.data)
      })
      .catch((error) => console.log(error))
  }

  get name() {
    return this.nameTarget.value
  }
}
