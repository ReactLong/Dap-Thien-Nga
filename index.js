const rootElement = document.getElementById('root')
function Index() {
  const [mount, setMount] = useState(true)

  return (
    <React.Fragment>
      {/* <button onClick={() => setMount(preMount => !preMount)} style={{position: 'fixed', bottom: '0'}}>Toggle</button> */}
      {mount &&
        <Logger>
          <Config>
            <History>
              <App />
            </History>
          </Config>
        </Logger>
      }
    </React.Fragment>
  )
}
ReactDOM.render(
  <Index></Index>,
  rootElement
)