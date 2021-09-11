// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import "stylesheets/application"
import "@fortawesome/fontawesome-free/css/all"
import Editor from '@toast-ui/editor';


import '@toast-ui/editor/dist/toastui-editor.css'; // Editor's Style

import "controllers"
import "styles"
Rails.start()
Turbolinks.start()
ActiveStorage.start()

import SimpleMDE from 'simplemde';

document.addEventListener("turbolinks:load", () => {
  let simplemde = new SimpleMDE({ 
    element: document.getElementById("simple"),
    autofocus: true,
	  autosave: {
		  enabled: true,
		  uniqueId: "MyUniqueID",
		  delay: 1000,
	  },
    placeholder: "Type here...",
    status: ["autosave", "lines", "words", "cursor", {
      className: "keystrokes",
      defaultValue: function(el) {
        this.keystrokes = 0;
        el.innerHTML = "0 Keystrokes";
      },
      onUpdate: function(el) {
        el.innerHTML = ++this.keystrokes + " Keystrokes";
      }
    }], 
  });
  
})

document.addEventListener('turbolinks:load', function () {
  let editorSelected = document.querySelector('#editor')

  if (editorSelected) {

    const editor = new Editor({
      el: document.querySelector('#editor'),
      height: '600px',
      initialEditType: 'markdown',
      previewStyle: 'vertical'
    });
  }
})