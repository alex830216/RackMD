// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import "@fortawesome/fontawesome-free/css/all"

import "controllers"
import "styles"
Rails.start()
Turbolinks.start()
ActiveStorage.start()
<<<<<<< HEAD

document.addEventListener('turbolinks:load', function () {
  let editorSelected = document.querySelector('#editor')

  if (editorSelected) {

    const editor = new Editor({
      el: document.querySelector('#editor'),
      height: '600px',
      initialEditType: 'markdown',
      previewStyle: 'vertical',
      initialValue:''
    });
  }
})
=======
>>>>>>> 1296531 (刪除無用程式碼)
