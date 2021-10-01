import { Controller } from "stimulus"
import axios from "axios"

export default class extends Controller {
  static targets = ["box", "filter"]

  connect() {
    console.log("searchTag_connect!")
  }
  toggle() {
    if (this.boxTarget.style.display == "none") {
      this.boxTarget.style.display = "block"
    } else {
      this.boxTarget.style.display = "none"
    }
  }

  search() {
    const tags = document.getElementsByName("tag")
    const checkedTags = []
    for (let i = 0; i <tags.length; i++) {
      if (tags[i].checked) {
        checkedTags.push(tags[i].value)
      }
    }
    let data = { tag_str: checkedTags.toString() }
    // console.log(data)
    axios
      .post(`/api/v1/notes/tag_filter`, data)
      .then((res) => {
        let noteAndTaggings = res.data
        // console.log(noteAndTaggings)
        var userNotes = noteAndTaggings.note  //array
        var taggings = noteAndTaggings.tagging  //array

        const noteId = taggings.map(
          (tagging) => tagging.note_id )
        console.log(noteId)
        const newNotes = userNotes.filter(
          (note) => {
            for (var i = 0; i < noteId.length; i++) {
              if (note.id == noteId[i]){
                return note
              }
            }
          })
        const template = `
          <div class="notes-gather">
            <h2 class="-m-1 w-full">
              <a href="/notes/${note_id}" class="text-gray-rackmd no-underline" >${note_title}</a>
            </h2>
            <span class="update-timer">
              <i class="far fa-clock"></i>
              變更於${0}天前
            </span>
            <div class="notes-icon-list">
              <a data-controller="collect"
                  data-collect-id-value="${note_id}"
                  data-action="collect#addCollection">
                <i class="fa-bookmark collection_icon text-sm cursor-pointer fas" 
                    data-collect-target="icon">
                </i>
              </a>
              <a data-confirm="確定刪除筆記？" rel="nofollow" data-method="delete" href="/notes/${note_id}" >
                <i class="fas fa-trash-alt" ></i>
              </a>
            </div>
          </div>
        ` 
        
        this.filterTarget.innerHTML = ""
        template.map((note_id, note_title) => {
          for (var i = 0; i < newNotes.length; i++) {
            note_id = newNotes[i].id
            note_title = newNotes[i].title
          }
        })
        console.log("OK")
        
        render()
        // console.log(newNotes)
        // console.log(this.filterTarget)
      })
      .catch((error) => console.log(error))
  }
}
