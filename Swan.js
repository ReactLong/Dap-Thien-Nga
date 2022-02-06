
function Swan({ id, handleSetTotal }) {
  const config = useContext(ConfigContext)
  const [count, setCount] = useState(Number.parseInt(config.minutes) * 10)
  const [isActive, setActive] = useState(false)
  const timer = useRef()
  const successRef = React.useRef()
  const overRef = React.useRef()

  // when input minutes change
  useEffect(() => {
    handleStop()
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
    if (count <= 0) {
      handleStop()
    }
  }, [count])

  const handleStart = () => {
    if (!isActive) {
      setActive(true)
      timer.current = setInterval(() => setCount(preCount => preCount - 1), 100)
    }
    if(config.startSound) successRef.current.play()
  }

  const handleStop = () => {
    if (isActive) {
      handleSetTotal()
      if(config.stopSound) overRef.current.play()
    }
    setActive(false)
    setCount(Number.parseInt(config.minutes) * 10)
    clearInterval(timer.current)
  }

  return (
    <tr className={isActive && "table-active"}>
      <th scope="row">{id}</th>
      <td colspan="2">{date.format(new Date(count * 100), 'mm:ss:S')}</td>
      <td><button type="button" className="btn btn-primary btn-sm" onClick={handleStart}>Start</button></td>
      <td><button type="button" className="btn btn-danger btn-sm" onClick={handleStop}>Stop</button></td>
      <video ref={successRef} className="gameSuccess" src="https://tiengdong.com/wp-content/uploads/Am-thanh-tra-loi-dung-chinh-xac-www_tiengdong_com.mp3"></video>
      <video ref={overRef} className="gameOver" src="https://tiengdong.com/wp-content/uploads/Tieng-sung-ban-1-phat-www_tiengdong_com.mp3"></video>
    </tr>
  )
}
