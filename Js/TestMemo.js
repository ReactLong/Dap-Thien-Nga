

const TestMemo = React.memo(() => {
  const logger = useContext(LoggerContext)
  logger.warn('re-render TestMemo')
  return (
    <h1></h1>
  )
})