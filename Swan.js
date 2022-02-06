
function Swan({ id, handleSetTotal }) {
  const config = useContext(ConfigContext)
  const history = useContext(HistoryContext)
  const [count, setCount] = useState(Number.parseInt(config.minutes) * 10)
  const [isActive, setActive] = useState(false)
  const timer = useRef()
  const begin = useRef()

  const successRef = React.useRef()
  const overRef = React.useRef()
  const almostDoneRef = React.useRef()

  // when input minutes change
  useEffect(() => {
    if (!isActive) handleStop()
  }, [config.minutes])

  // when unmount
  useEffect(() => {
    return () => {
      console.log('unmounted ' + id)
      handleSetTotal()
      handleStop()
    }
  }, [])

  // countdown to 0 and stop
  useEffect(() => {
    if (count == 30) {
      if(config.almostDoneSound) almostDoneRef.current.play()
    }
    else if (count <= 0) handleStop()
  }, [count])

  const handleStart = () => {
    if (!isActive) {
      setActive(true)
      timer.current = setInterval(() => setCount(preCount => preCount - 1), 100)

      // set log
      begin.current = new Date()
    }
    if (config.startSound) successRef.current.play()
  }

  const handleStop = () => {
    if (isActive) {
      handleSetTotal()
      successRef.current.pause()
      almostDoneRef.current.pause()
      if (config.stopSound) overRef.current.play()
      
      // save log
      history.handleSetHistory({
        id,
        begin: date.format(begin.current, 'HH:mm:ss ddd DD/MM/YYYY'),
        end: date.format(new Date(), 'HH:mm:ss ddd DD/MM/YYYY'),
        total: date.subtract(new Date(), begin.current).toMinutes()
      })
    }
    resetSwan()
  }

  // reset swan
  const resetSwan = () => {
     setActive(false)
     setCount(Number.parseInt(config.minutes) * 10)
     clearInterval(timer.current)
  }

  return (
    <React.Fragment>
      <tr className={isActive? "table-active": ""}>
        <th scope="row">{id}</th>
        <td colSpan="2">{date.format(new Date(count * 100), 'mm:ss:S')}</td>
        <td><button type="button" className="btn btn-primary btn-sm" onClick={handleStart}>Start</button></td>
        <td><button type="button" className="btn btn-danger btn-sm" onClick={handleStop}>Stop</button></td>
      </tr>
      <video ref={successRef} className="gameSuccess" src="https://tiengdong.com/wp-content/uploads/Am-thanh-tra-loi-dung-chinh-xac-www_tiengdong_com.mp3"></video>
      <video ref={overRef} className="gameOver" src="https://tiengdong.com/wp-content/uploads/Tieng-sung-ban-1-phat-www_tiengdong_com.mp3"></video>
      <video ref={almostDoneRef} className="almostDone" src="https://tiengdong.com/wp-content/uploads/Am-thanh-dem-nguoc-3-giay-www_tiengdong_com.mp3"></video>
    </React.Fragment>
  )
}
