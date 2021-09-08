import { Controller } from "stimulus"
// import Rails from '@rails/ujs';
import axios from "axios";


export default class extends Controller {
  static targets = [ "editor" ]
  static values = { id: Number }

  connect() {
    this.findTags();
  }

  findTags() {
    var targetInsert = setInterval( () => {
      const tagNodes = this.editorTarget.querySelectorAll(".toastui-editor-md-heading6 .toastui-editor-md-marked-text")
      const tags = Object.values(tagNodes).map((node) => {
        const tagText = node.innerText
        return this.filter(tagText)
      })
      const csrfToken = document.querySelector("meta[name=csrf-token]").content;
      axios.defaults.headers.common["X-CSRF-Token"] = csrfToken;
      const url = `/api/v1/notes/${this.idValue}/tag`
      axios.post(url, { tag_str: tags.toString() })
      .then((res) => console.log(`success!!`))
      .catch((err) => console.log(`error!${err}`))
    }, 15000);
  }
  
  filter(str) { 
    var pattern=/[`~ !@#$^&*()=|{}':;',\\\[\]\.<>\/?~！@#￥……&*（）——|{}【】'；：""'。，、？]/g;
    return str.replace(pattern,"");
  } 
}