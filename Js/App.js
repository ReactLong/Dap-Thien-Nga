
function App() {
  const config = useContext(ConfigContext)
  const localHistory = useContext(HistoryContext)
  const [isSetting, setIsSetting] = useState(false)
  const [isHistory, setIsHistory] = useState(false)

  React.useEffect(() => {

  }, [])

  // interface
  const settingRef = useRef()
  const settingBtnRef = useRef()
  const historyRef = useRef()
  const historyBtnRef = useRef()
  const handleSettingBtnClick = () => {
    settingRef.current.classList.add('active')
  }
  const handleHistoryBtnClick = () => {
    setIsHistory(preHis => !preHis)
  }
 
  return (
    <React.Fragment>
      <header>
        <i ref={historyBtnRef} onClick={handleHistoryBtnClick} className="fas fa-history feature-btn history-btn"></i>
        Swan HaiGiap
        <i ref={settingBtnRef} onClick={handleSettingBtnClick} className="fas fa-cogs feature-btn setting-btn"></i>
      </header>
      <div className="container">
        <table className="swan-table table table-hover table-sm">
          <thead>
            <tr>
              <th scope="col">Swan</th>
              <th scope="col" colSpan="2">Counter</th>
              <th scope="col">Start</th>
              <th scope="col">Stop</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(config.swans)].map((x, i) =>
              <Swan key={i} id={i + 1} />)
            }
          </tbody>
        </table>
        <h2 className="d-flex justify-content-center">Total: {localHistory.history.length}</h2>
        <Setting ref={settingRef}></Setting>
        {isHistory && <Paging></Paging>}
      </div>
    </React.Fragment>
  )
}
