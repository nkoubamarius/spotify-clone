import React,{useState, useEffect} from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import Player from './Player';
import SpotifyWebApi from "spotify-web-api-js";
import { actionTypes } from './reducer';
import {useDataLayerValue} from "./DataLayer";

const spotify =new SpotifyWebApi();

function App() {

  const [{user, token, playlists}, dispatch]=useDataLayerValue();

  useEffect(() => {

    const hash =getTokenFromUrl();
    window.location.hash="";
    const _token=hash.access_token;

    if(_token){

      dispatch({
        type: actionTypes.SET_TOKEN,
        token: _token,
      });

      spotify.setAccessToken(_token);
      spotify.getMe().then((user)=>{

        dispatch({
          type: actionTypes.SET_USER,
          user: user,
        });

      }).catch(error=> alert(error.message));

      spotify.getUserPlaylists().then((playlists)=>{
        dispatch({
          type: actionTypes.SET_PLAYLISTS,
          playlists: playlists,
        })
      })
    }
    
  }, []);

  return (
    <div className="app">

      {token ? (

        <Player spotify={spotify}/>

      ):(
        <Login/>

      )}

    </div>
  );
}

export default App;
