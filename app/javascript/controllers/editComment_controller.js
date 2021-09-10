import { Controller } from "stimulus"
import Rails from "@rails/ujs"

export default class extends Controller {
  static targets = [ "text", "hide" ]
  static values = { id: Number }

  edit(e) {
    e.preventDefault()
    const origin = this.textTarget.innerText
    const textarea = document.createElement("textarea")
    this.textTarget.replaceWith(textarea)
    textarea.innerText = origin
    // replaceWith 完，屬性會消失，須重新添加
    textarea.setAttribute("data-action", "keydown->editComment#pressEnter")
    textarea.setAttribute("data-editComment-target", "text")
    textarea.focus()
    // 輸入位置從起始移到最後
    const val = textarea.value
    textarea.value = ""
    textarea.value = val
    this.hideTarget.style.display = "none"
  }

  pressEnter(e) {
    if (e.key === "Enter") {
      const edited = this.textTarget.value
      const previous = document.createElement("div")
      this.textTarget.replaceWith(previous)
      previous.innerText = edited
      previous.setAttribute("data-editComment-target", "text")
      // 打 API
      this.updatecomment(this.idValue);
    }
  }

  updatecomment(id) {
    // 用 Rails.ajax 打 API 無法順利將資料傳到後端
    // 可將 data 的值帶入網址，取代原本作法
    const url = `/api/v1/comments/${id}/editcomment?comment[content]=${this.textTarget.innerText}`
    Rails.ajax({
      type: "post",
      url,
      success: (data) => {
        console.log(data)
      },
      error: function (err) {
        console.log(err);
      },
    });
  }
}