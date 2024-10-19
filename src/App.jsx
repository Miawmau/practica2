import { useState,useEffect } from 'react'
import './App.css'
import { getProfiles } from './lib/getProfiles'
import Profile from "./components/Profile"

function App() {
  const [profiles, setprofiles] = useState([])
  useEffect(() => {
    async function fetchdata() {
      try{
        const response=await getProfiles("")
        setprofiles(response)
        console.log(profiles)
      }catch(error){
        console.log("error en traer")
      }
    }
    fetchdata
  }, [])
    return (
    <>
    {profiles.map((profile) => (<Profile key={profile.id} profile={profile} />))}
    </>
  )
}

export default App
