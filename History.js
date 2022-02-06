const HistoryContext = createContext()

function History({ children }) {
  const [history, setHistory] = useState(
    localStorage.getItem('history') ? JSON.parse(localStorage.getItem('history')) : []
  )
  const handleSetHistory = (payload) => {
    setHistory(preHis => [...preHis, payload])
  }

  useEffect(() => {
    localStorage.setItem('history', JSON.stringify(history))
  }, [history])

  return (
    <HistoryContext.Provider value={{ history, handleSetHistory }}>
      {children}
    </HistoryContext.Provider>
  )
}