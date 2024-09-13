/* eslint-disable no-unused-vars */
import React from 'react'
import NetflixBanner from './components/NetflixBanner'


const App = () => {
  return (
<div>
      <NetflixBanner /> {/* Ensure this component is rendered only once */}
    </div>  )
}

export default App