import { useState, useEffect } from 'react'
// Probably no reason to keep this outside here
const API_ENDPOINT = 'http://searcha.io:8080/api/search'

// API key comes in as parameter for re usability
function useSearch({ data, setData, searchterm, apikey = 'ef8478cb-8d81-4928-b717-7d63a89a053f' }) {

  const [ error, setError ] = useState(null)

  async function search(cancel = false) {

    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({
        key: apikey,
        query: searchterm,
        filters: {
          Countries: {
            type: 'value',
            size: 10
          },
          MountainRange: {
            type: 'value',
            size: 10
          }
        },
        fields: {
          Name: {
            type: 'highlight',
            size: 100
          },
          MountainRange: {
            type: 'highlight',
            size: 20
          },
          Countries: {
            type: 'highlight',
            size: 20
          }
        },
        pagination: {
          size: 20,
          current: 1
        }
      })
    }).catch(e => {
      throw e
    })

    if (!response) {
      throw new Error('Could not contact API.')
    }

    if (response.status === 200 && !cancel) {
      setData(await response.json())
    } else {
      throw new Error(response.statusText)
    }
  }

  useEffect(() => {
    let cancel = false

    if (searchterm) {
      search(cancel).catch(e => {
        setError(e)
      })
    }

    return () => {
      cancel = true
    }
  }, [ searchterm, search ])

  return [ error ]
}

export { useSearch }
