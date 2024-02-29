import { useEffect } from 'react'
import { useState } from 'react'

export const App = () => {
  const [ip, setIp] = useState('')

  useEffect(() => {
    const getIP = async () => {
      const response = await fetch('https://api.ipify.org?format=json')
      const data = await response.json()
      setIp(data.ip)
    }

    getIP()
  }, [])

  /* GET COUNTRY BY IP*/
  fetch(`https://ipinfo.io/${ip}?token=d2911f489054ec`)
    .then((response) => response.json())
    .then((jsonResponse) => console.log(jsonResponse.ip, jsonResponse.country))

  return <div>{ip ? `My public IP address is: ${ip}` : 'Loading...'}</div>
}
export default App
