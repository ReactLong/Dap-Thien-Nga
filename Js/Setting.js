
const Setting = React.memo(() => {
  const config = useContext(ConfigContext)
  const localHistory = useContext(HistoryContext)
  const closePopUp = useContext(ClosePopUpContext)
  
  const logger = useContext(LoggerContext)
  logger.log('re-render Setting')

  return (
    <React.Fragment>
      {/* main form */}
      <form className="container" onClick={(e) => e.stopPropagation()}>
        <h1 className="mx-auto">Settings</h1>
        <div className="row mb-3">
          <label htmlFor="inputSwans" className="col-md-3 col-form-label">Swans</label>
          <div className="col-md-9">
            <input type="text" className="form-control" id="inputSwans" value={config.swans} onChange={e => config.handleSetSwans(e.target.value)} />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputMinutes" className="col-md-3 col-form-label">Minutes</label>
          <div className="col-md-9">
            <input type="text" className="form-control" id="inputMinutes" value={config.minutes} onChange={e => config.handleSetMinutes(e.target.value)} />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-10 offset-sm-2">
            <div className="form-check">
              <label className="form-check-label" htmlFor="starting-sound">
                Starting sound
              </label>
              <input className="form-check-input" type="checkbox" id="starting-sound" checked={config.startSound} onChange={() => config.setStartSound(preState => !preState)} />
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-10 offset-sm-2">
            <div className="form-check">
              <label className="form-check-label" htmlFor="almost-done-sound">
                Almost done sound
              </label>
              <input className="form-check-input" type="checkbox" id="almost-done-sound" checked={config.almostDoneSound} onChange={() => config.setAlmostDoneSound(preState => !preState)} />
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-10 offset-sm-2">
            <div className="form-check">
              <label className="form-check-label" htmlFor="stopping-sound">
                Stopping sound
              </label>
              <input className="form-check-input" type="checkbox" id="stopping-sound" checked={config.stopSound} onChange={() => config.setStopSound(preState => !preState)} />
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-6">
            <button type="button" className="btn btn-success" onClick={() => config.resetAll()}>Reset settings</button>
          </div>
          <div className="col-6">
            <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">Clear history</button>
          </div>
        </div>
        <div className="row mx-1">
          <button type="button" className="btn btn-primary" onClick={closePopUp.handleSettingOverlayClick}>Back</button>
        </div>
      </form>

      {/* modal */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Clear all history record?</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              This action can't be restored...
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => localHistory.clearHistory()}>Clear anyway</button>
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
})
