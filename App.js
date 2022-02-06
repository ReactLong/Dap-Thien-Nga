
function App() {
  const [total, setTotal] = useState(0)
  const config = useContext(ConfigContext)
  const [isSetting, setIsSetting] = useState(false)

  console.log('re-render-app')
  React.useEffect(() => {

  }, [])

  const handleSetTotal = () => {
    setTotal(preTotal => preTotal + 1)
  }

  // interface
  const settingRef = useRef()
  const settingBtnRef = useRef()
  const handleSettingBtnClick =() => {
    settingRef.current.classList.add('active')
  }
 
  return (
    <React.Fragment>
      <header>
        <i className="fas fa-history feature-btn history-btn"></i>
        Swan HaiGiap
        <i ref={settingBtnRef} onClick={handleSettingBtnClick} className="fas fa-cogs feature-btn setting-btn"></i>
      </header>
      <div className="container">
        <table className="swan-table table table-hover table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col" colSpan="2">Counter</th>
              <th scope="col">Start</th>
              <th scope="col">Stop</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(config.swans)].map((x, i) =>
              <Swan key={i} id={i + 1} handleSetTotal={handleSetTotal} />)
            }
          </tbody>
        </table>
        <h2 className="d-flex justify-content-center">Total: {total}</h2>
        <Setting ref={settingRef}></Setting>
      </div>
    </React.Fragment>
  )
}
