// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import "controllers"
import Editor from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css'; // Editor's Style

Rails.start()
Turbolinks.start()
ActiveStorage.start()

document.addEventListener('turbolinks:load', function () {

  let editor = document.querySelector('#editor')

  if (editor) {
    const editor = new Editor({
      el: document.querySelector('#editor'),
      height: '600px',
      initialEditType: 'markdown',
      previewStyle: 'vertical',
      initialValue: 'omgggg' // 要打 API
    });
  }
  })
