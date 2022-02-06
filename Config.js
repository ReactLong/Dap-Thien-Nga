const ConfigContext = createContext()
const defaultSwans = 5
const defaultMinutes = 5
const defaultStartSound = true
const defaultStopSound = true

function Config({ children }) {
  const [swans, setSwans] = useState(defaultSwans)
  const [minutes, setMinutes] = useState(defaultMinutes)
  const [startSound, setStartSound] = useState(defaultStartSound)
  const [stopSound, setStopSound] = useState(defaultStopSound)

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
  }
  console.log(swans, minutes, startSound, stopSound)
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
      resetAll
    }} >
      {children}
    </ConfigContext.Provider>
  )
}

