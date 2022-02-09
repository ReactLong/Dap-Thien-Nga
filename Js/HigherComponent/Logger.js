const LoggerContext = createContext()

function Logger ({children}) {

  // debugger
  const log = (...rest) => {
    if(rest.length == 1) console.log(`%c ${rest}`, 'color: #2ecc71;')
    else console.log(...rest)
  }

  const warn = (...rest) => {
    if(rest.length == 1) console.log(`%c ${rest}`, 'color: #f39c12;')
    else console.warn(...rest)
  }

  const error = (...rest) => {
    console.error(...rest)
  }
  log('re-render Logger')

  // // deployer
  // const log = () => {
    
  // }
  // const warn = () => {

  // }
  // const error = () => {

  // }

  return (
    <LoggerContext.Provider value={{log, warn, error}}>
      {children}
    </LoggerContext.Provider>
  )
}