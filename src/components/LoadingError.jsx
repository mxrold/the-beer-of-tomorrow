const LoadingError = ({ error }) => {
  return (
    <>
      {
      error &&
        <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>We could not load the information 🤔</h2>
      }
    </>
  )
}

export default LoadingError