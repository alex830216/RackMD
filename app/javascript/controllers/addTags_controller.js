import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "editor" ]
  static values = { id: Number }
  // let targetInsert;
  connect() {
    console.log("addTags controller connect!!")
    this.findTags();
  }

  findTags() {
    console.log("find Tags !!")
    console.log(this.idValue)
    let targetInsert = setInterval( () => {
      console.log("Interval!")
      const tagNodes = this.editorTarget.querySelectorAll(".toastui-editor-md-heading6 .toastui-editor-md-marked-text")
      const tags = Object.values(tagNodes).map((node) => node.innerText)
      console.log(tags.toString())
      // 來打ＡＰＩ
      const url = `/api/v1/notes/${this.idValue}/collection`
      Rails.ajax({
        url: url,
        type: "POST",
        success: function(data) {
          console.log(data)
        }
        error: function(response) {
          
        }
      
      })
      


    }, 5000);
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