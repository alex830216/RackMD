import { Controller } from "stimulus";
import Vditor from "vditor";
import "vditor/src/assets/scss"

export default class extends Controller {
  connect() {
    new Vditor('app', {
          toolbar: [
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
            'table',
            '|',
            'edit-mode',
            'content-theme',
            'code-theme',
            'export',
            'both',
            'preview',
          ],
          mode: 'sv',
          height: window.innerHeight + 100,
          preview: {
            hljs: {
              lineNumber: true
            },
            markdown: {
              mark: true,
              footnotes: true,
              autoSpace: true,
            },
            // 將預設值 ["desktop", "tablet", "mobile", "mp-wechat", "zhihu"] 改為空的
            actions: []
          },
          tab: '\t'
        })
    };
  }