const ConfigContext = createContext()
const defaultSwans = 5
const defaultMinutes = 5
const defaultStartSound = true
const defaultStopSound = true
const defaultAlmostDoneSound = true

function Config({ children }) {
  const [swans, setSwans] = useState(defaultSwans)
  const [minutes, setMinutes] = useState(defaultMinutes)
  const [startSound, setStartSound] = useState(defaultStartSound)
  const [stopSound, setStopSound] = useState(defaultStopSound)
  const [almostDoneSound, setAlmostDoneSound] = useState(defaultAlmostDoneSound)

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
  console.log(swans, minutes, startSound, stopSound, almostDoneSound)
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
}

