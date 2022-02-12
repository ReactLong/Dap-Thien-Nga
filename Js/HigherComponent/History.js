const HistoryContext = createContext()

const History = React.memo(({ children }) => {
  const logger = useContext(LoggerContext)
  logger.log('re-render History')
 
  const [history, setHistory] = useState(
    localStorage.getItem('history') ? JSON.parse(localStorage.getItem('history')) : []
  )
  const handleSetHistory = (payload) => {
    setHistory(preHis => [payload, ...preHis])
  }

  const clearHistory = () => {
    setHistory([])
  }

  useEffect(() => {
    localStorage.setItem('history', JSON.stringify(history))
  }, [history])

  return (
    <HistoryContext.Provider value={{ history, handleSetHistory, clearHistory}}>
      {children}
    </HistoryContext.Provider>
  )
})
