const Setting = React.forwardRef(({ disable }, ref) =>{
  const config = useContext(ConfigContext)

  const handleSettingOverlayClick = () => {
    ref.current.classList.remove('active')
  }
  return (
    <div className="setting-background" ref={ref} onClick={handleSettingOverlayClick}>
      <form className="container setting-form m-4 p-4" onClick={(e) => e.stopPropagation()}>
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
              <label className="form-check-label" htmlFor="stopping-sound">
                Stopping sound
              </label>
              <input className="form-check-input" type="checkbox" id="stopping-sound" checked={config.stopSound} onChange={() => config.setStopSound(preState => !preState)} />
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
          <div className="col-6">
            <button type="button" className="btn btn-danger" onClick={() => config.resetAll()}>Reset settings</button>
          </div>
          <div className="col-6">
            <button type="button" className="btn btn-danger" onClick={() => config.resetAll()}>Clear data</button>
          </div>
        </div>
        <div className="row">
          <button type="button" className="btn btn-primary" onClick={handleSettingOverlayClick}>Backward</button>
        </div>
      </form>
    </div>
  )
})
