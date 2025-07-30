import React, { useEffect, useState } from 'react'

export default function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('/api')
      .then(res => res.json())
      .then(setData)
  }, [])

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>Vercel Test App</h1>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading API...</p>
      )}
    </div>
  )
}
