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

import Editor from "@ckeditor/ckeditor5-build-classic";

document.addEventListener('turbolinks:load', function () {
  let editorSelected = document.querySelector('#editor')

  if (editorSelected) {
    ClassicEditor
	    .create( document.querySelector( '#editor' ) )
	    .then( editor => {
	    	window.editor = editor;
	    } )
	    .catch( error => {
	    	console.error( 'There was a problem initializing the editor.', error );
	    } );
  }
})