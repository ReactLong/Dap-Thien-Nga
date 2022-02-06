
function App() {
  const [total, setTotal] = useState(0)
  const config = useContext(ConfigContext)
 

  console.log('re-render-app')
  React.useEffect(() => {

  }, [])

  const handleSetTotal = () => {
    setTotal(preTotal => preTotal + 1)
  }
  return (
    <div className="container">
      <table className="table table-hover table-sm">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col" colspan="2">Counter</th>
            <th scope="col">Start</th>
            <th scope="col">Stop</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(config.swans)].map((x, i) =>
            <Swan key={i} id={i + 1} handleSetTotal={handleSetTotal} />)
          }
        </tbody>
      </table>
      <h2>Total: {total}</h2>
      <Setting></Setting>
    
    </div>
  )
}
