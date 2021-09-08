import { Controller } from "stimulus"
// import Rails from '@rails/ujs';
import axios from "axios";


export default class extends Controller {
  static targets = [ "editor" ]

  connect() {
    this.findTags();
  }

  findTags() {
    let targetInsert = setTimeout( () => {
      const tagNodes = this.editorTarget.querySelectorAll(".toastui-editor-md-heading6 .toastui-editor-md-marked-text")
      const tags = Object.values(tagNodes).map((node) => node.innerText)
      
      const csrfToken = document.querySelector("meta[name=csrf-token]").content;
      axios.defaults.headers.common["X-CSRF-Token"] = csrfToken;
      const url = `/api/v1/notes/${this.idValue}/tag`
      axios.post(url, { tag_str: tags.toString() })
           .then((res) => console.log(`success!!`))
           .catch((err) => console.log(`error!${err}`))
    }, 10000);
  }

    // this.editorTarget.addEventListener('keyup', function(e){
    //   // enter 的 keyCode 是 13
    //   if( e.keyCode === 13 ){
    //     console.log("Enter up!!");
    //     console.log(this.editorTarget.querySelector(".toastui-editor-md-heading6"))
    //   }
    // }, false);

  // function stopFindTags() {
  //   clearInterval(targetInsert)
  // }
    // console.log(this.editorTarget.querySelector(".toastui-editor-md-heading6"))
    // if (this.editorTarget.querySelector(".toastui-editor-md-heading6").innerText = " tags: "){
    //   console.log("yes!!")
    // }
}