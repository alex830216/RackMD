const e = React.createElement

class APP extends React.Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    const vditor = new Vditor('vditor', {
      height: 360,
      toolbarConfig: {
        pin: true,
      },
      cache: {
        enable: false,
      },
      after () {
        vditor.setValue('Hello, Vditor + React!')
      },
    })
  }

  render () {
    return e(
      'div',
      {id: 'vditor'},
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<APP />, document.getElementById('app'))
})
