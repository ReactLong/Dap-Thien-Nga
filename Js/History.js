const HistoryContext = createContext()

function History({ children }) {
  const [history, setHistory] = useState(
    localStorage.getItem('history') ? JSON.parse(localStorage.getItem('history')) : []
  )
  const handleSetHistory = (payload) => {
    setHistory(preHis => [...preHis, payload])
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
}