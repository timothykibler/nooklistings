import { useState, useEffect } from 'react'
// Probably no reason to keep this outside here
const API_ENDPOINT = 'http://127.0.0.1:3001/search'

// API key comes in as parameter for re usability
function useSearch({ setData, query, apikey = 'ef8478cb-8d81-4928-b717-7d63a89a053f', language = 'en' }) {

  const [ error, setError ] = useState(null)

  useEffect(() => {
    async function search(cancel = false) {

      console.log(JSON.stringify(
        {
          language,
          query
        }
      ))

      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'uuid': '42a76ebf-63a2-4a52-a221-ba9f03212566'
        },
        body: JSON.stringify({
          query,
          language
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
        console.log(response)
        throw new Error(response.statusText)
      }
    }

    let cancel = false

    if (query.length > 1) {
      search(cancel).catch(e => {
        setError(e)
      })
    }

    return () => {
      cancel = true
    }

  }, [ query, setData, setError ])

  return [ error ]
}

export { useSearch }
