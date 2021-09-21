// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import "@fortawesome/fontawesome-free/css/all"
// import Editor from '@toast-ui/editor';


// import '@toast-ui/editor/dist/toastui-editor.css'; // Editor's Style

import "controllers"
import "styles"
// import "./hello_react.jsx"
Rails.start()
Turbolinks.start()
ActiveStorage.start()