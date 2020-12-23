import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from './Player';
import {useDataLayerValue} from "./DataLayer"

const spotify = new SpotifyWebApi()


function App() {
  // const [token, setToken] = useState(null);  
  const [{user, token }, dispatch] = useDataLayerValue();

   //runs code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";

    const _token = hash.access_token;
    console.log("I HAVE A TOKEN>>>>", token)

    if (_token) {
      // setToken(_token);
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      })

      spotify.setAccessToken(_token)

      spotify.getMe().then((user) => {
        console.log("WE IN", user)

        dispatch({
          type: 'SET_USER',
          user: user
        })
      })
    }
    
    console.log("I have a token" , token)
  }, []);
  console.log("I have a user", user)
  console.log("I have a token" , token)
  
  

  return (
    <div className="app">
      {
        token ? (
          // <h1>I am logged in</h1>
          <Player/>
        ) : (
          <Login/>
        )
      }
    </div>
  );
}

export default App;
