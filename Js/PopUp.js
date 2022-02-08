const ClosePopUpContext = createContext()

const PopUp = React.forwardRef(({popUpLeft, children }, ref) => {

  const handleSettingOverlayClick = () => {
    ref.current.classList.remove('active')
  }

  return (
    <ClosePopUpContext.Provider value={{handleSettingOverlayClick}}>
      <div className={popUpLeft? "popUp-left popUp-background": "popUp-right popUp-background"} ref={ref} onClick={handleSettingOverlayClick}>
        <div className="popUp-content" onClick={(e) => e.stopPropagation()} onScroll={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </ClosePopUpContext.Provider>
  )

})