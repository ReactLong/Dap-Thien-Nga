const rootElement = document.getElementById('root')
ReactDOM.render(
  <Config>
    <History>
      <App />
    </History>
  </Config>,
  rootElement
)

let settingBackground = document.querySelector('.setting-background')
let settingForm = document.querySelector('.setting-form')
let settingBtn = document.querySelector('.setting-btn')
let historyBtn = document.querySelector('.history-btn')
