import { Controller } from "stimulus"
// import Rails from '@rails/ujs';
import axios from "axios";


export default class extends Controller {
  static targets = [ "editor" ]
  static values = { id: Number }

  connect() {
    console.log("connect!!")
  }

  findTags(e) {
    console.log("hi!")
    var catchTag = () => {
      const tagNodes = this.editorTarget.querySelectorAll(".toastui-editor-md-heading6 .toastui-editor-md-marked-text")

      var tags = Object.values(tagNodes).map((node) => {
        const tagText = node.innerText
        return filter(tagText)
      })
      return tags
    }
    var saveTag = debounce(() => {
      catchTag()
      const csrfToken = document.querySelector("meta[name=csrf-token]").content;
      axios.defaults.headers.common["X-CSRF-Token"] = csrfToken;
      const url = `/api/v1/notes/${this.idValue}/tag`
      axios.post(url, { tag_str: tags.toString() })
      .then((res) => console.log(`success!!`))
      .catch((err) => console.log(`error!${err}`))
    }, 1000)

    if(e.keyCode !== undefined){
      saveTag()
      console.log("save!!")
    }

    function filter(str) { 
      var pattern=/[`~ !@#$^&*()=|{}':;',\\\[\]\.<>\/?~！@#￥……&*（）——|{}【】'；：""'。，、？]/g;
      return str.replace(pattern,"")
    }

    function debounce(func, delay) {
      var timer = null;
      return function () {
        var context = this;
        var args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
          func.apply(context, args)
        }, delay);
      }
    }
  }
}