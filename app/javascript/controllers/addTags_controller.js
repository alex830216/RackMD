import { Controller } from "stimulus"
let debounce = require("lodash/debounce")
import axios from "axios";


export default class extends Controller {
  static targets = [ "editor" ]
  static values = { id: Number }

  connect() {
    console.log("connect!!")
  }
  initialize(){
    this.findTags = debounce(this.findTags, 500).bind(this)
  }
  findTags() {
    const tagNodes = this.editorTarget.querySelectorAll(".toastui-editor-md-heading6 .toastui-editor-md-marked-text")
    const tags = Object.values(tagNodes).map((node) => {
      const tagText = node.innerText
      return filter(tagText)
    })
    const csrfToken = document.querySelector("meta[name=csrf-token]").content;
    axios.defaults.headers.common["X-CSRF-Token"] = csrfToken;
    const url = `/api/v1/notes/${this.idValue}/tag`
    console.log(tags)
    axios.post(url, { tag_str: tags.toString() })
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
    
    function filter(str) { 
      var pattern=/[`~ !@#$^&*()=|{}':;',\\\[\]\.<>\/?~！@#￥……&*（）——|{}【】'；：""'。，、？]/g;
      return str.replace(pattern,"")
    }
  }
}