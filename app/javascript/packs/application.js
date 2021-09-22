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

import SimpleMDE from "simplemde"
import "simplemde/dist/simplemde.min.css"
import "simplemde/dist/simplemde.min.js"

document.addEventListener("turbolinks:load", function() {
  let editor = document.getElementById("app")
  if (editor) {
    new SimpleMDE({element: editor,
      autosave: {
        enabled: false,
        uniqueId: "SimpleMDE",
        delay: 1000,
      },
      renderingConfig: {
        singleLineBreaks: true,
        codeSyntaxHighlighting: true,
        lineNumbers: true
      },
      spellChecker: false,
      forceSync: true,
      lineWrapping: true,
      toolbar: [
        {
          name: "bold",
          action: SimpleMDE.toggleBold,
          className: "fa fa-bold",
          title: "粗體",
        },
        {
          name: "italic",
          action: SimpleMDE.toggleItalic,
          className: "fa fa-italic",
          title: "斜體",
        },
        {
          name: "strikethrough",
          action: SimpleMDE.toggleStrikethrough,
          className: "fa fa-strikethrough",
          title: "刪除線"
        },
        {
          name: "heading",
          action: SimpleMDE.toggleHeadingSmaller,
          className: "fa fa-header",
          title: "標體",
        },
        "|", // Separator
        {
          name: "code",
          action: SimpleMDE.toggleCodeBlock,
          className: "fa fa-code",
          title: "程式碼"
        },
        {
          name: "quote",
          action: SimpleMDE.toggleBlockquote,
          className: "fa fa-quote-left",
          title: "引用",
        },
        {
          name: "unordered-list",
          action: SimpleMDE.toggleUnorderedList,
          className: "fa fa-list-ul",
          title: "無序清單",
        },
        {
          name: "ordered-list",
          action: SimpleMDE.toggleOrderedList,
          className: "fa fa-list-ol",
          title: "有序清單",
        },
        {
          name: "checklist",
          action: checklist,
          className: "fa fa-check-square",
          title: "待辦事項"
        },
        "|", // Separator
        {
          name: "link",
          action: SimpleMDE.drawLink,
          className: "fa fa-link",
          title: "建立連結",
        },
        {
          name: "image",
          action: SimpleMDE.drawImage,
          className: "fa fa-picture-o",
          title: "插入圖片",
        },
        {
          name: "table",
          action: SimpleMDE.drawTable,
          className: "fa fa-table",
          title: "插入表格"
        },
        {
          name: "horizontal-rule",
          action: SimpleMDE.drawHorizontalRule,
          className: "fa fa-minus",
          title: "插入水平線"
        },
        {
          name: "插入留言",
          action: message,
          className: "fa fa-comment-o",
          title: "插入留言",
        },
        "|", // Separator
        {
          name: "preview",
          action: SimpleMDE.togglePreview,
          className: "fa fa-eye no-disable",
          title: "檢視",
          default: true
        },
        {
          name: "side-by-side",
          action: SimpleMDE.toggleSideBySide,
          className: "fa fa-columns no-disable no-mobile",
          title: "雙欄",
          default: true
        },
        {
          name: "fullscreen",
          action: SimpleMDE.toggleFullScreen,
          className: "fa fa-arrows-alt no-disable no-mobile",
          title: "全螢幕",
          default: true
        }
      ]
    })
  }
})

function checklist(editor) {
  var cm = editor.codemirror;
  var output = '';
  // var selectedText = cm.getSelection();
  // var text = selectedText || 'placeholder';

  output = ' - [ ] ';
  cm.replaceSelection(output);
};

function message(editor) {
  var cm = editor.codemirror;
  var output = '';
  // var selectedText = cm.getSelection();
  // var text = selectedText || 'placeholder';

  output = ' > [] ';
  cm.replaceSelection(output);
};