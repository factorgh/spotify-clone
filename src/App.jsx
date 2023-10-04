import { getTokenFromUrl,  } from "./services/spotify";
import { useEffect, useState } from "react";
import Login from "./components/Login"
import SpotifyWebApi from "spotify-web-api-js"
import Player from "./components/Player";
import { useData } from "./dataLayer/dataLayer";



const spotify = new SpotifyWebApi() ;


const App = () => {
    
    const [token,setToken]= useState(null);
    const [{user}, dispatch] = useData();
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if(_token){
      setToken(_token);
      dispatch({
        type:"SET_TOKEN",
        token :_token
      })
      
      spotify.setAccessToken(_token);
      spotify.getMe().then((user)=> dispatch({
        type:"SET_USER",
        user:user
      }));

spotify.getPlaylist("37i9dQZF1DX7t977T5F4kQ").then((discover_weekly)=>{
    dispatch({
    type:"GET_PLAYLIST",
    discover_weekly:discover_weekly
  })
}
);


      spotify.getUserPlaylists().then(playlist=> dispatch({
        type:"SET_PLAYLIST",
        playlist: playlist
      }))
    }
      
         

  },[dispatch]);
  console.log(user)
  console.log(token)
  

  return (
    <div>
      {
        token? <Player spotify={spotify}/> : <Login/>
      }
     
    </div>
  )
}

export default App