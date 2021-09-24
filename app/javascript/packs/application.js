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
<<<<<<< HEAD

=======
// import "../reactjs"
// import "../reactjs/editor"
>>>>>>> add vditor
Rails.start()
Turbolinks.start()
ActiveStorage.start()

import Vditor from 'vditor'
import 'vditor/src/assets/scss'

// new VConsole()
document.addEventListener('turbolinks:load', () => {
  let editor = document.querySelector("app")
  if (editor) {
    console.log(123)
    console.log(Vditor)
  }
  toolbar = [
    'bold',
    'italic',
    'strike',
    'headings',
    '|',
    'code',
    'quote',
    'list',
    'ordered-list',
    'check',
    '|',
    'link',
    'inline-code',
    'insert-before',
    'insert-after',
    '|',
    'upload',
    'record',
    'table',
    '|',
    'edit-mode',
    'content-theme',
    'code-theme',
    'export',
    {
      name: 'more',
      toolbar: [
        'fullscreen',
        'both',
        'preview',
        'info',
        'help',
      ],
    }]
  const vditor = new Vditor('app', {
    // _lutePath: `http://192.168.0.107:9090/lute.min.js?${new Date().getTime()}`,
    // _lutePath: 'src/js/lute/lute.min.js',
    // cdn: "http://localhost:9000",
    toolbar,
    mode: 'wysiwyg',
    height: window.innerHeight + 100,
    outline: {
      enable: true,
      position: 'right',
    },
    debugger: true,
    theme: "dark",
    typewriterMode: true,
    placeholder: 'Hello, Vditor!',
    preview: {
      markdown: {
        toc: true,
        mark: true,
        footnotes: true,
        autoSpace: true,
      },
      math: {
        engine: 'KaTeX',
      },
    },
    toolbarConfig: {
      pin: true,
    },
    counter: {
      enable: true,
      type: 'text',
    },
    hint: {
      emojiPath: 'https://cdn.jsdelivr.net/npm/vditor@1.8.3/dist/images/emoji',
      emojiTail: '<a href="https://ld246.com/settings/function" target="_blank">设置常用表情</a>',
      emoji: {
        'sd': '💔',
        'j': 'https://unpkg.com/vditor@1.3.1/dist/images/emoji/j.png',
      },
      parse: false,
      extend: [
        {
          key: '@',
          hint: (key) => {
            console.log(key)
            if ('vanessa'.indexOf(key.toLocaleLowerCase()) > -1) {
              return [
                {
                  value: '@Vanessa',
                  html: '<img src="https://avatars0.githubusercontent.com/u/970828?s=60&v=4"/> Vanessa',
                }]
            }
            return []
          },
        },
        {
          key: '#',
          hint: (key) => {
            console.log(key)
            if ('vditor'.indexOf(key.toLocaleLowerCase()) > -1) {
              return [
                {
                  value: '#Vditor',
                  html: '<span style="color: #999;">#Vditor</span> ♏ 一款浏览器端的 Markdown 编辑器，支持所见即所得（富文本）、即时渲染（类似 Typora）和分屏预览模式。',
                }]
            }
            return []
          },
        }],
    },
    tab: '\t',
    upload: {
      accept: 'image/*,.mp3, .wav, .rar',
      token: 'test',
      url: '/api/upload/editor',
      linkToImgUrl: '/api/upload/fetch',
      filename (name) {
        return name.replace(/[^(a-zA-Z0-9\u4e00-\u9fa5\.)]/g, '').
          replace(/[\?\\/:|<>\*\[\]\(\)\$%\{\}@~]/g, '').
          replace('/\\s/g', '')
      },
    },
  })
})
