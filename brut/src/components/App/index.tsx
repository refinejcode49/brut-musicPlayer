import { useEffect, useState } from "react"
import Login from "../Login"
import TrackInfo from "../TrackInfo"
import Nav from "../Nav"
import { getAccessToken } from "../../../auth"
import axios from "axios"
import { GlobalStyle } from "../../styles"


const App = () => {

  const GlobalStyleProxy:any = GlobalStyle

  const [token, setToken] = useState<string | null>(null)
  const [profile, setProfile] = useState<string | null>(null)

  const clientId = import.meta.env.VITE_CLIENT_ID;
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");

  useEffect(() => {
    if (code && !token) {
      getToken()
    }
    if (token) {
      getUserInfo()
    }
  }, [token])

  //console.log(token)

  const getToken = async () => {

    if(code){
      const accessToken = await getAccessToken(clientId, code)
      setToken(accessToken)
  }
  }
const getUserInfo = async () => {
  const { data } = await axios.get("https://api.spotify.com/v1/me", {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  })
  setProfile(data.images[0].url)
}

  if (!token) {
    return (
      <>
        <GlobalStyleProxy />
       <Login></Login> 
      </>
    )

  } else {
    return(
      <>
        <GlobalStyleProxy />
        <Nav 
          profile={profile} 
        />
        <TrackInfo />
      </>
       

    ) 
  }

}

export default App
