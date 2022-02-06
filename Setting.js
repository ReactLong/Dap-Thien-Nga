
function Setting() {
  const config = useContext(ConfigContext)

  return (
    <div>
      <form>
        <div className="row mb-3">
          <label for="inputSwans" className="col-md-3 col-form-label">Swans</label>
          <div className="col-md-9">
            <input type="text" className="form-control" id="inputSwans" value={config.swans} onChange={e => config.handleSetSwans(e.target.value)}/>
          </div>
        </div>
        <div className="row mb-3">
          <label for="inputMinutes" className="col-md-3 col-form-label">Minutes</label>
          <div className="col-md-9">
            <input type="text" className="form-control" id="inputMinutes" value={config.minutes} onChange={e => config.handleSetMinutes(e.target.value)}/>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-10 offset-sm-2">
            <div className="form-check">
              <label className="form-check-label" for="starting-sound">
                Starting sound
              </label>
              <input className="form-check-input" type="checkbox" id="starting-sound" checked={config.startSound} onChange={() => config.setStartSound(preState => !preState)}/>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-10 offset-sm-2">
            <div className="form-check">
              <label className="form-check-label" for="stopping-sound">
                Stopping sound
              </label>
              <input className="form-check-input" type="checkbox" id="stopping-sound" checked={config.stopSound} onChange={() => config.setStopSound(preState => !preState)}/>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-6">
            <button type="button" className="btn btn-danger" onClick={() => config.resetAll()}>Reset settings</button>
          </div>
          <div className="col-sm-6">
            <button type="button" className="btn btn-danger" onClick={() => config.resetAll()}>Clear data</button>
          </div>
        </div>
      </form>
    </div>
  )
}

