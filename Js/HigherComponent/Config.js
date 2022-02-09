const ConfigContext = createContext()
const defaultSwans = 10
const defaultMinutes = 15
const defaultStartSound = true
const defaultStopSound = true
const defaultAlmostDoneSound = true

const Config = React.memo(({ children }) => {
  const logger = useContext(LoggerContext)
  logger.log('re-render Config')

  const localConfig = useRef(localStorage.getItem('config') ? JSON.parse(localStorage.getItem('config')) : {
    swans: defaultSwans,
    minutes: defaultMinutes,
    startSound: defaultStartSound,
    stopSound: defaultStopSound,
    almostDoneSound: defaultAlmostDoneSound,
  })
  const [swans, setSwans] = useState(localConfig.current.swans)
  const [minutes, setMinutes] = useState(localConfig.current.minutes)
  const [startSound, setStartSound] = useState(localConfig.current.startSound)
  const [stopSound, setStopSound] = useState(localConfig.current.stopSound)
  const [almostDoneSound, setAlmostDoneSound] = useState(localConfig.current.almostDoneSound)

  const handleSetSwans = (swans) => {
    setSwans(Number.parseInt(swans) || 0)
  }
  const handleSetMinutes = (minutes) => {
    setMinutes(Number.parseInt(minutes) || 0)
  }

  const resetAll = () => {
    setSwans(defaultSwans)
    setMinutes(defaultMinutes)
    setStartSound(defaultStartSound)
    setStopSound(defaultStopSound)
    setAlmostDoneSound(defaultAlmostDoneSound)
  }

  // save config to local
  useEffect(() => {
    localConfig.current = {
      swans: swans,
      minutes: minutes,
      startSound: startSound,
      stopSound: stopSound,
      almostDoneSound: almostDoneSound
    }
    localStorage.setItem('config', JSON.stringify(localConfig.current))
    return () => {
      localStorage.setItem('config', JSON.stringify(localConfig.current))
    }
  }, [swans, minutes, startSound, stopSound, almostDoneSound])

  return (
    <ConfigContext.Provider value={{
      swans,
      handleSetSwans,
      minutes,
      handleSetMinutes,
      startSound,
      setStartSound,
      stopSound,
      setStopSound,
      almostDoneSound,
      setAlmostDoneSound,
      resetAll
    }} >
      {children}
    </ConfigContext.Provider>
  )
})

