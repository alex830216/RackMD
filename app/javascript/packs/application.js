// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
// import axios from 'axios'
import Editor from '@toast-ui/editor';


import '@toast-ui/editor/dist/toastui-editor.css'; // Editor's Style


Rails.start()
Turbolinks.start()
ActiveStorage.start()

document.addEventListener('turbolinks:load', function () {  // 因為其他html沒有 <div id="editor"></div>，所以其他頁會出錯，這頁有，但因為turbolinks的一些問題，所以要等turbolinks跑完再判斷有無抓到元素，有的話就執行
  let aa = document.querySelector('#editor')

if (aa) {

  const editor = new Editor({
    el: document.querySelector('#editor'),
    height: '600px',
    initialEditType: 'markdown',
    previewStyle: 'vertical'
  });
}
})

import "controllers"

// const getUsers = () => {
//   axios.get('/notes/new')
//   .then(response => {
//     const users = response.data.data;
//     console.log(`GET user`, users);
//   })
//   .catch(error => console.error(error));
// };
// getUsers();