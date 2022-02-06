
const Paging = React.forwardRef((props, ref) => {
  const localHistory = useContext(HistoryContext)

  return (
    <div>
      <h1>History:</h1>
      <div class="table-responsive">

        <table className="table table-hover table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Swan</th>
              <th scope="col">Begin</th>
              <th scope="col">End</th>
              <th scope="col">Minutes</th>
            </tr>
          </thead>
          <tbody>
            {localHistory.history.map((item, index) => (
              <tr key={index}>
                <th scope="row">{index}</th>
                <td>{item.id}</td>
                <td>{item.begin}</td>
                <td>{item.end}</td>
                <td>{item.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div id="paging"></div>
      </div>
    </div>
  )
})
