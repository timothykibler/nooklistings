import { useState, useEffect } from 'react'

function useKeyListen({ listenkey }) {

  const [ keypressed, setKeyPressed ] = useState(false)

  function onKeyDown({ key }) {
    if (key === listenkey) {
      setKeyPressed(true)
    }
  }

  function onKeyUp({ key }) {
    if (key === listenkey) {
      setKeyPressed(false)
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('keyup', onKeyUp)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('keyup', onKeyUp)
    }

  })

  return [ keypressed ]
}

export { useKeyListen }
