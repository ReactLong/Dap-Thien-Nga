const HistoryContext = createContext()

function History({children}) {
  const [history, setHistory] = useState([])
  const handleSetHistory = (payload) => {
    setHistory(preHis => [...preHis, payload])
  }
  return(
    <HistoryContext.Provider value={history, handleSetHistory}>
      {children}
    </HistoryContext.Provider>
  )
}