
const Paging = React.memo(function Paging() {
  const localHistory = useContext(HistoryContext)
  const closePopUp = useContext(ClosePopUpContext)

  const logger = useContext(LoggerContext)
  logger.log('re-render PagingHistory')

  return (
    <React.Fragment>
      <h1>History</h1>
        <div className="table-responsive">

          <table className="table table-hover table-striped table-sm">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Swan</th>
                <th scope="col">Begin</th>
                <th scope="col">End</th>
                <th scope="col">Total</th>
                <th scope="col">Config</th>
              </tr>
            </thead>
            <tbody>
              {localHistory.history.map((item, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <th>{item.id}</th>
                  <td>{item.begin}</td>
                  <td>{item.end}</td>
                  <td>{item.total}</td>
                  <td>{item.minutes}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="row mx-4">
            <button type="button" className="btn btn-primary" onClick={closePopUp.handleSettingOverlayClick}>Back</button>
          </div>
          <div id="paging"></div>
        </div>
    </React.Fragment>
  )
})
