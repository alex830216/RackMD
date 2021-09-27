import { Controller } from "stimulus"
let debounce = require("lodash/debounce")
import axios from "axios"
export default class extends Controller {
  static targets = ["name"]
  static values = { id: String, content: String }
  initialize() {
    this.updateValue = debounce(this.updateValue, 2000).bind(this)
  }
  connect() {
    console.log("autosave connect!")
    this.presentValue()
  }
  updateValue() {
    const csrfToken = document.querySelector("meta[name=csrf-token]").content
    axios.defaults.headers.common["X-CSRF-Token"] = csrfToken
    // 找到 markdown 的內容，在.CodeMirror-code 這個 class 內
    const contentHTML = document.querySelector(".CodeMirror-lines").innerHTML
    const content = contentHTML.replace(/<[^>]+>/g, "")
    // .toastui-editor-contents這個 class 會渲染出 html ，因此在這裡找標題
    const editorContent = document.querySelector(".md-editor-preview")
    // 確定第一行是不是 h1 格式
    console.log(`debug content=${content}`)
    const title =
      editorContent.firstChild.nodeName === "H1"
        ? editorContent.firstChild.innerText
        : "Untitled"
    let data = { note: { title, content } }
    console.log(`idValue is ${this.idValue}`) //////
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

  presentValue() {
    // console.log(document.querySelector("#editor .CodeMirror-lines"))
    // document.querySelector("#editor .CodeMirror-lines").innerHTML =
    //   this.contentValue
  }
}
